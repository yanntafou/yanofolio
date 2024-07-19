//this controller helps to perform code operations on products based on the repository

package com.yano.smartshop.controllers;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.yano.smartshop.models.Product;
import com.yano.smartshop.models.ProductDto;
import com.yano.smartshop.repository.ProductRepository;

import jakarta.validation.Valid;



@Controller 
@RequestMapping("/products") //we add a controller that needs to access the url /products with a request mapping

public class ProductsController {

    @Autowired //this helps to request repo from the ProductRepository container
    private ProductRepository repo;

    //method that allow us to read our data from the database

    
    
    @GetMapping({"", "/"}) //access our product with the Http method ("/products" or "/products/")
    public String showProductList (Model model) {
        List<Product> products = repo.findAll(Sort.by(Sort.Direction.DESC, "id")); //Sort our products to display the newest products first
        model.addAttribute("products", products);
        return "products/index";
    }

    @GetMapping("/create") //access the page createproduct with the Http method
    public String showCreatePage (Model model) {
        ProductDto productDto = new ProductDto();
        model.addAttribute("productDto", productDto);
        return "products/createProduct";
    }

    @PostMapping("/create") //method to submit the new product created
    public String submitProduct( 
            @Valid //validate the data of the object productDto 
            @ModelAttribute ProductDto productDto, 
            BindingResult result ) //helps to check validation errors
            {   
                if (productDto.getImageFile() .isEmpty()) {
                    result.addError(new FieldError("productDto", "imageFile", "The image file is required"));
                }

                if (result.hasErrors()) {
                    return "products/createProduct";
                }

                //save image file
                MultipartFile image = productDto.getImageFile();
                Date createdAt = new Date();
                String storageFileName = createdAt.getTime() + "_" + image.getOriginalFilename(); //the date allows us ot creat a unique file name to the image (createdDate_originalFileName)

                try {
                    String uploadDir = "public/images/";
                    Path uploadPath = Paths.get(uploadDir);

                    if (!Files.exists(uploadPath)) {
                        Files.createDirectories(uploadPath);
                    }

                    try (InputStream inputStream = image.getInputStream()) {
                        Files.copy(inputStream, Paths.get(uploadDir + storageFileName), StandardCopyOption.REPLACE_EXISTING);
                    }
                } catch (IOException ex) {
                    System.out.println("Exception: " + ex.getMessage());
                }

                //saving new products in the database

                Product product = new Product();
                product.setName(productDto.getName());
                product.setBrand(productDto.getBrand());
                product.setCategory(productDto.getCategory());
                product.setPrice(productDto.getPrice());
                product.setDescription(productDto.getDescription());
                product.setCreatedAt(createdAt); //date based on the date object created earlier for the image storage name
                product.setImageFileName(storageFileName); //image based on the image object created earlier

                repo.save(product);
                

                return "redirect:/products";
            }
    
    @GetMapping("/edit")
    public String showEditPage(
        Model model,
        @RequestParam int id
    )  {

        try {
            Product product = repo.findById(id).get(); //Get the product we want to edit by it's ID and fetch the rest of the information
            model.addAttribute("product", product);

            ProductDto productDto = new ProductDto();
            productDto.setName(product.getName());
            productDto.setBrand(product.getBrand());
            productDto.setCategory(product.getCategory());
            productDto.setPrice(product.getPrice());
            productDto.setDescription(product.getDescription());

            model.addAttribute("productDto", productDto);
            model.addAttribute("success", true);
        }   
        catch(Exception ex) {
            System.out.println("Exception: " + ex.getMessage());
            return "redirect:/products";
        } 

        return "products/editProduct";
    }

    @PostMapping("/edit")
    public String updateProduct(
        Model model,
        @RequestParam int id,
        @Valid @ModelAttribute ProductDto productDto,
        BindingResult result
    ) {
        try {
            Product product = repo.findById(id).get(); 
            model.addAttribute("product", product);

            if (result.hasErrors()){
                return "products/editProduct";
            }

            //cheking if user updates image file

            if(!productDto.getImageFile().isEmpty()) {
                //delete old image
                String uploadDir = "public/images/";
                Path oldImagePath = Paths.get(uploadDir + product.getImageFileName());

                try {
                    Files.delete(oldImagePath);
                }
                catch(IOException ex) {
                    System.out.println("Exception: " + ex.getMessage());
                    
                }
                
                //save new image file
                MultipartFile image = productDto.getImageFile();
                Date createdAt = new Date();
                String storageFileName = createdAt.getTime() + "_" + image.getOriginalFilename();

                try (InputStream inputStream = image.getInputStream()) {
                    Files.copy(inputStream, Paths.get(uploadDir + storageFileName), StandardCopyOption.REPLACE_EXISTING);
                }

                product.setImageFileName(storageFileName);

            }
            
            product.setName(productDto.getName());
            product.setBrand(productDto.getBrand());
            product.setCategory(productDto.getCategory());
            product.setPrice(productDto.getPrice());
            product.setDescription(productDto.getDescription());    
            
            repo.save(product);
            model.addAttribute("success", true);
        }   
        catch(IOException ex) {
            System.out.println("Exception: " + ex.getMessage());
            
        } 
        return "redirect:/products";
    }

    //method for deleting products

    @GetMapping("/delete")
    public String deleteProduct(@RequestParam int id) {

        try{
            Product product = repo.findById(id).get();

            //deleting product image
            Path imagePath = Paths.get("public/images/" + product.getImageFileName());

            try {
                Files.delete(imagePath);
            }
            catch(IOException ex) {
                System.out.println("Exception: " + ex.getMessage());
                
            } 

            //delete product from database
            repo.delete(product);
        }
        catch(Exception ex) {
            System.out.println("Exception: " + ex.getMessage());
            
        } 
        return "redirect:/products";
    }
}
//this repository or interface help to read and write our products in the database

package com.yano.smartshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yano.smartshop.models.Product;

//the interface extends the JPA repository which requires the model (product) and the type of the primary key (integer)

//spring JPA will implement the interface for us

public interface ProductRepository extends JpaRepository<Product, Integer>  {
    
}

package com.example.serverapi.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.UUID;

@Entity
@Table
public class Product implements Serializable {
    @Id
    @GeneratedValue
    private UUID productId;
    @Column(name="product_name",nullable=false)
    private String productName;
    @Column(name="product_description",nullable=false)
    private String productDescription;
    @Column(name="product_price",nullable=false)
    private double productPrice;
    @Column(name="product_category",nullable=false)
    private String productCategory; //categoria
    @Column(name="product_stock",nullable=false)
    private double productStock;
    @ManyToOne(
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER)

    private Listing listing;

    public Product(UUID productId, String productName, String productDescription, double productPrice, String productCategory, double productStock) {
        this.productId = productId;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
        this.productCategory = productCategory;
        this.productStock = productStock;
    }

    public Product() {
    }

    public UUID getProductId() {
        return productId;
    }

    public void setProductId(UUID productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(double productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductCategory() {
        return productCategory;
    }

    public void setProductCategory(String productCategory) {
        this.productCategory = productCategory;
    }

    public double getProductStock() {
        return productStock;
    }

    public void setProductStock(double productStock) {
        this.productStock = productStock;
    }
}

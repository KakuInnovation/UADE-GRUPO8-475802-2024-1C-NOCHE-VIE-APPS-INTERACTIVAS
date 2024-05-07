package com.example.serverapi.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.UUID;

@Entity
@Table(name="listing")
public class Listing implements Serializable {
    @Id
    @GeneratedValue
    private UUID listingId;
    private String title;
    @OneToMany(mappedBy="listing",
            cascade =CascadeType.ALL,
            fetch = FetchType.LAZY,
            orphanRemoval = true)
    private ArrayList<Product> products;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private User user;

    public Listing() {
    }

    public Listing(UUID listingId, String title, ArrayList<Product> products, User user) {
        this.listingId = listingId;
        this.title = title;
        this.products = products;
        this.user = user;
    }

    public UUID getListingId() {
        return listingId;
    }

    public void setListingId(UUID listingId) {
        this.listingId = listingId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public ArrayList<Product> getProducts() {
        return products;
    }

    public void setProducts(ArrayList<Product> products) {
        this.products = products;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}

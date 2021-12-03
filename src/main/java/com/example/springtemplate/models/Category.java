package com.example.springtemplate.models;

public enum Category {
    APPAREL,
    ART,
    ELECTRONICS,
    FOOD_DRINK;

    static public Category convertString(String value) {
        switch(value) {
            case "apparel":
                return Category.APPAREL;
            case "art":
                return Category.ART;
            case "electronics":
                return Category.ELECTRONICS;
            default:
                return Category.FOOD_DRINK;
        }
    }
}

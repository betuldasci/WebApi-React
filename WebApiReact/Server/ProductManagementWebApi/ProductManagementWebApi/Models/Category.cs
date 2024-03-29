﻿namespace ProductManagementWebApi.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string Desc { get; set; }
        public string ImageSlug { get; set; }
        public string Image { get; set; }

        public List<Product> Products { get; set; }
    }
}

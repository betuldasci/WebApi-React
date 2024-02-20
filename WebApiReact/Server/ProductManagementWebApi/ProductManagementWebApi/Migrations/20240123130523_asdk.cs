using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProductManagementWebApi.Migrations
{
    public partial class asdk : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsStatus",
                table: "Product");

            migrationBuilder.DropColumn(
                name: "IsStatus",
                table: "Category");

            migrationBuilder.RenameColumn(
                name: "Stock",
                table: "Product",
                newName: "SalesCount");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Product",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Category",
                newName: "Title");

            migrationBuilder.AddColumn<string>(
                name: "Gallery",
                table: "Product",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Desc",
                table: "Category",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "Category",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImageSlug",
                table: "Category",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Gallery",
                table: "Product");

            migrationBuilder.DropColumn(
                name: "Desc",
                table: "Category");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "Category");

            migrationBuilder.DropColumn(
                name: "ImageSlug",
                table: "Category");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Product",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "SalesCount",
                table: "Product",
                newName: "Stock");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Category",
                newName: "Name");

            migrationBuilder.AddColumn<bool>(
                name: "IsStatus",
                table: "Product",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsStatus",
                table: "Category",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}

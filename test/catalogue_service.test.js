const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

  describe("catalogueService.checkBookByTitle", () => {
    test("returns true or false if the book exists in the catalogue", () => {
      expect(catalogueService.checkBookByTitle("The Origin of Species")).toBe(true);
      expect(catalogueService.checkBookByTitle("The Chronicles of Narnia")).toBe(false);
    })
  })

  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns number of titles that start with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
      expect(catalogueService.countBooksByFirstLetter("w")).toBe(2);
    })
  })

  describe("catalogueService.getQuantity", () => {
    test("returns the quantity of books given the book title", () => {
      expect(catalogueService.getQuantity("A Place of Greater Safety")).toBe(11);
    })
  })

  describe("catalogueService.getBooksByAuthor", () => {
    test("returns an array of books when given the author's name", () => {
      expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual([
        { title: "2666", author: "Robert Bolaño", quantity: 17 },
        { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
      ]);
    })
  })

  describe("catalogueService.checkQuantity", () => {
    test("returns true or false given a title and qty, if that title exists and stock is greater than quantity", () => {
      expect(catalogueService.checkQuantity("By Night In Chile", 4)).toBe(true);
      expect(catalogueService.checkQuantity("By Night In Chile", 100)).toBe(false);
    })
  })


});

class Book {
    constructor(
      id,
      categoryIds,
      title,
      affordability, // affordable, priecy, luxurious
      complexity, // simple, challenging, trek
      imageUrl,
      duration,
      description,
      steps,
      // 4 boolean values (later will be used in filters page)
      isFamilyAvailable,
      isSuitableForDisabled,
      isWaterAccess,
      isUrban
    ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.imageUrl = imageUrl;
      this.description = description;
      this.steps = steps;
      this.duration = duration;
      this.complexity = complexity;
      this.affordability = affordability;
      this.isFamilyAvailable = isFamilyAvailable;
      this.isSuitableForDisabled = isSuitableForDisabled;
      this.isWaterAccess = isWaterAccess;
      this.isUrban = isUrban;
    }
  }
  
export default Book;



// class Book {
//   constructor(
//     id,
//     categoryIds,
//     title,
//     info, // affordable, priecy, luxurious
//     weight, // simple, challenging, trek
//     imageUrl,
//     shipping,
//     description,
//     price,
//    // criticism,
//     // 4 boolean values (later will be used in filters page)
//     isFamilyAvailable,
//     isSuitableForDisabled,
//     isWaterAccess,
//     isUrban
//   ) {
//     this.id = id;
//     this.categoryIds = categoryIds;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//     this.shipping = shipping;
//     this.weight = weight;
//     //this.criticism = criticism;
//     this.info = info;
//     this.isFamilyAvailable = isFamilyAvailable;
//     this.isSuitableForDisabled = isSuitableForDisabled;
//     this.isWaterAccess = isWaterAccess;
//     this.isUrban = isUrban;
//   }
// }

// export default Book;
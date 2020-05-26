let Customer = function () {
    this.setName = function (name) {
        this.name = name;
    }
    this.getName = function () {
        return this.name;
    }
    this.setCMND = function (cmnd) {
        this.cmnd = cmnd;
    }
    this.getCMND = function () {
        return this.cmnd;
    }
    this.setBirthday = function (birthday) {
        this.birthday = birthday;
    }
    this.Birthday = function () {
        return this.birthday;
    }
    this.setEmail = function (email) {
        this.email = email;
    }
    this.getEmail = function () {
        return this.email;
    }
    this.setAddress = function (address) {
        this.address = address;
    }
    this.Address = function () {
        return this.address;
    }
    this.setTypeService = function (typeService) {
        this.typeService = typeService;
    }
    this.getTypeService = function () {
        return this.typeService;
    }
    this.setTypeRoom = function (typeRoom) {
        this.typeRoom = typeRoom;
    }
    this.getTypeRoom = function () {
        return this.typeRoom;
    }
    this.setTypeCustomer = function (typeCustomer) {
        this.typeCustomer = typeCustomer;
    }
    this.getTypeCustomer = function () {
        return this.typeCustomer;
    }
    this.setDiscount = function (discount) {
        this.discount = discount;
    }
    this.getDiscount = function () {
        return this.discount;
    }
    this.setQuantityIncluded = function (quantityIncluded) {
        this.quantityIncluded = quantityIncluded;
    }
    this.getQuantityIncluded = function () {
        return this.name;
    }
    this.setRenDays = function (renDays) {
        this.renDays = renDays;
    }
    this.getRenDays = function () {
        return this.renDays;
    }
    this.totalPay = function () {
        let money = 0;
        if(this.getTypeService() == "Villa"){
            money = 500;
        }else if(this.getTypeService() == "House"){
            money = 300;
        }else if (this.getTypeService() == "Room"){
            money = 200;
        }
        return this.getRenDays()*money*(1 - this.getDiscount()/100);
    }


}
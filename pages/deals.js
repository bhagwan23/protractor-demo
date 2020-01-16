let deals = function () {

    let Dealsclick = element(by.xpath("//span[text()='Deals']"));
    
    

    this.dealclick = function(result){
        Dealsclick.click();
       };
    }
//setTimeout(() => {

    // function displaydownloadstats(totalDownloads) {
  
    //   // Nine Zeroes for Billions
    //   return Math.abs(Number(totalDownloads)) >= 1.0e+9
  
    //     ? (Math.abs(Number(totalDownloads)) / 1.0e+9).toFixed() + "B+"
    //     // Six Zeroes for Millions 
    //     : Math.abs(Number(totalDownloads)) >= 1.0e+6
  
    //       ? (Math.abs(Number(totalDownloads)) / 1.0e+6).toFixed(1) + "M+"
    //       // Three Zeroes for Thousands
    //       : Math.abs(Number(totalDownloads)) >= 1.0e+3
  
    //         ? (Math.abs(Number(totalDownloads)) / 1.0e+3).toFixed(1) + "K+"
  
    //         : Math.abs(Number(totalDownloads));
    // }
  
    // Function to fetch total downloads for all packages
    // function fetchTotalDownloads() {
    //   var profileId = "Aspose";
    //   var searchUrl = "https://api-v2v3search-0.nuget.org/query?q=owner:" + profileId;
    //   $.ajax({
    //     url: searchUrl,
    //     dataType: "json",
    //     success: function (data) {
    //       // Fetch the details of all packages
    //       var packageDetails = data.data;
    //       var totalDownloads = 0;
  
    //       // Iterate through each package and sum up the total downloads
    //       for (var i = 0; i < packageDetails.length; i++) {
    //         totalDownloads += packageDetails[i].totalDownloads;
    //       }
  
    //       $("#asposetotal").text(displaydownloadstats(totalDownloads))
  
    //     },
    //     error: function () {
    //       // Handle error case for search request
    //       $("#asposetotal").text("54.1M+");
    //     }
    //   });
    // }
  
  //   //fetchTotalDownloads();
  
  //   // Function to fetch total downloads for a specific package
  //   function fetchPackageDetails(packageId, targetSelector) {
  //     var packageUrl = "https://api-v2v3search-0.nuget.org/query?q=packageid:" + packageId
  
  //     $.ajax({
  //       url: packageUrl,
  //       dataType: "json",
  //       success: function (packageData) {
  //         var totalDownloads = packageData.data[0].totalDownloads;
  //         // Do something with the total downloads of the package
  //         //console.log("Total Downloads for " + packageId + ": " + totalDownloads);
  //         $(targetSelector).text(displaydownloadstats(totalDownloads));
  //       },
  //       error: function () {
  //         // Handle error case for individual package request
  //         console.error("Error fetching details for package: " + packageId);
  //       }
  //     });
  //   }
  
  //   // Call the fetchPackageDetails function with the desired packageId
  //   var packageIdPdf = "aspose.PDF";
  //   var packageIdWords = "aspose.Words";
  //   var packageIdCells = "aspose.Cells";
  //   var packageIdSlides = "Aspose.Slides.NET";
  //   var packageIdEmail = "Aspose.Email";
  //   var packageIdImaging = "Aspose.Imaging";
  //   var packageIdBarCode = "Aspose.BarCode";
  //   var packageIdHtml = "Aspose.HTML";
  
  //   var pdfSelector = "#asposepdf";
  //   var wordsSelector = "#asposewords";
  //   var cellsSelector = "#asposecells";
  //   var slidesSelector = "#asposeslides";
  //   var emailSelector = "#asposeemail";
  //   var imagingSelector = "#asposeimaging";
  //   var barcodeelector = "#asposebarcode";
  //   var htmlSelector = "#asposehtml";
  
  
  //   fetchPackageDetails(packageIdPdf, pdfSelector);
  //   fetchPackageDetails(packageIdWords, wordsSelector);
  //   fetchPackageDetails(packageIdCells, cellsSelector);
  //   fetchPackageDetails(packageIdSlides, slidesSelector);
  //   fetchPackageDetails(packageIdEmail, emailSelector);
  //   fetchPackageDetails(packageIdImaging, imagingSelector);
  //   fetchPackageDetails(packageIdBarCode, barcodeelector);
  //   fetchPackageDetails(packageIdHtml, htmlSelector);
  // }, 1000);
  
  //https://script.google.com/macros/s/AKfycbzc2o1e35eczeGvip9TESeI4aiPTlIWtzjNe9HOPwPHgOYly2wZ-8Ei54Y7hHIIHmnD5Q/exec
  //developer metrics original: fetch('https://script.google.com/macros/s/AKfycbzNoOIXnkBuWq5JfYKacC6FVsIjiT3Vbt-VmlikdaLOZbBWSDOtHEQjyfD3QSQs7_ia/exec')
  //Total metrics fetch('https://script.google.com/macros/s/AKfycbzc2o1e35eczeGvip9TESeI4aiPTlIWtzjNe9HOPwPHgOYly2wZ-8Ei54Y7hHIIHmnD5Q/exec')
      
  // setTimeout(() => {
  //   //fetch('https://script.google.com/macros/s/AKfycbzNoOIXnkBuWq5JfYKacC6FVsIjiT3Vbt-VmlikdaLOZbBWSDOtHEQjyfD3QSQs7_ia/exec')
  //   fetch('https://script.google.com/macros/s/AKfycbzc2o1e35eczeGvip9TESeI4aiPTlIWtzjNe9HOPwPHgOYly2wZ-8Ei54Y7hHIIHmnD5Q/exec')
  //     .then(res => res.json())
  //     .then((res) => {
  //       const data = res.data[1];
  
  //       console.log(res.data[0]);

  //       // for (var i=1; i < res.data.length; i++) {
  //       //    if (res.data[i]["Category"] == "Package Manager") {
  //       //     console.log(res.data[i]);
  //       //    }
  //       // }

  //       // console.log(res.data[1]);
  //       // console.log(res.data[1]);
  //       // console.log(res.data[1]);
  //       // console.log(res.data[1]);
  //       // console.log(res.data[1]);
  //       // console.log(res.data[1]);
  //       //const fs = require('fs');
  //       //var FileSaver = require('file-saver');
  
  //       // for(var i=0; i< res.data.length; i++) {
  //       //  console.log(res.data[i]['Category'] + ' ' + res.data[i]['Type']+ ' ' + res.data[i]['Total']);
  //       // }
        
  //       // function displayusagestats(data) {
  
     
  //       //   // Nine Zeroes for Billions
  //       //   return Math.abs(Number(data)) >= 1.0e+9
  
  //       //     ? (Math.abs(Number(data)) / 1.0e+9).toFixed() + "B+"
  //       //     // Six Zeroes for Millions 
  //       //     : Math.abs(Number(data)) >= 1.0e+6
  
  //       //       ? (Math.abs(Number(data)) / 1.0e+6).toFixed(1) + "M+"
  //       //       // Three Zeroes for Thousands
  //       //       : Math.abs(Number(data)) >= 1.0e+3
  
  //       //         ? (Math.abs(Number(data)) / 1.0e+3).toFixed(1) + "K+"
  
  //       //         : Math.abs(Number(data));
  //       // }
  
  //       //getElement('totalmetrics').innerHTML = Number(res.data[0]["Total"]).toLocaleString('en-US', { style: 'decimal' });
  //       //getElement('totaldevelopers').innerHTML = displayusagestats(data.TotalDevelopers);
  //       //getElement('totalcustomers').innerHTML = displayusagestats(data.TotalCustomers);
  //       //getElement('totallicensesold').innerHTML = displayusagestats(data.TotalLicenses);
  //       //getElement('totalfortune').innerHTML = displayusagestats(data.TotalFortune);
  
  //     });
  
  // }, 200);
  

  // $('.metrics-number4').each(function () {
  //   $(this).prop('Counter', 0).animate({
  //     Counter: $(this).text()
  //   }, {
  //     duration: 1000,
  //     easing: 'swing',
  //     step: function (now) {
  //       $(this).text(Math.ceil(now));
  //     }
  //   });
  // });

  // $('.metrics-number').each(function () {
  //   $(this).prop('Counter', 0).animate({
  //     Counter: $(this).text()
  //   }, {
  //     duration: 1000,
  //     easing: 'swing',
  //     step: function (now) {
  //       $(this).text(Math.ceil(now) + "M+");
  //     }
  //   });
  // });
  
  // $('.metrics-number2').each(function () {
  //   $(this).prop('Counter', 0).animate({
  //     Counter: $(this).text()
  //   }, {
  //     duration: 1000,
  //     easing: 'swing',
  //     step: function (now) {
  //       $(this).text(Math.ceil(now) + "K+");
  //     }
  //   });
  // });
  
  // $('.metrics-number3').each(function () {
  //   $(this).prop('Counter', 0).animate({
  //     Counter: $(this).text()
  //   }, {
  //     duration: 2000,
  //     easing: 'swing',
  //     step: function (now) {
  //       $(this).text(Math.ceil(now));
  //     }
  //   });
  // });
  
  function getElement(id) {
    //console.log('id: ' + id);
    return document.getElementById(id);
  }
  
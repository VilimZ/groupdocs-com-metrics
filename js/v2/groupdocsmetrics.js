

setTimeout(() => {
  function displaydownloadstats (totalDownloads) {
    
    // Nine Zeroes for Billions
    return Math.abs(Number(totalDownloads)) >= 1.0e+9
    
    ? (Math.abs(Number(totalDownloads)) / 1.0e+9).toFixed() + "B+"
    // Six Zeroes for Millions 
    : Math.abs(Number(totalDownloads)) >= 1.0e+6
    
    ? (Math.abs(Number(totalDownloads)) / 1.0e+6).toFixed(1) + "M+"
    // Three Zeroes for Thousands
    : Math.abs(Number(totalDownloads)) >= 1.0e+3
    
    ? (Math.abs(Number(totalDownloads)) / 1.0e+3).toFixed(1) + "K+"
    
    : Math.abs(Number(totalDownloads));
    }
              // Function to fetch total downloads for all packages
              function fetchTotalDownloads() {
                var profileId = "GroupDocs";
                var searchUrl = "https://api-v2v3search-0.nuget.org/query?q=owner:" + profileId;
                $.ajax({
                  url: searchUrl,
                  dataType: "json",
                  success: function(data) {
              // Fetch the details of all packages
          var packageDetails = data.data;
          var totalDownloads = 0;
          
          // Iterate through each package and sum up the total downloads
          for (var i = 0; i < packageDetails.length; i++) {
            totalDownloads += packageDetails[i].totalDownloads;
          } 

          $("#groupdocstotal").text(displaydownloadstats (totalDownloads))

        },
    error: function() {
        // Handle error case for search request
        $("#groupdocstotal").text("1.7M+");
    }
});
}
fetchTotalDownloads();

    // Function to fetch total downloads for a specific package
    function fetchPackageDetails(packageId, targetSelector) {
      var packageUrl = "https://api-v2v3search-0.nuget.org/query?q=packageid:" + packageId

      $.ajax({
        url: packageUrl,
        dataType: "json",
        success: function(packageData) {
          var totalDownloads = packageData.data[0].totalDownloads;
          // Do something with the total downloads of the package
          //console.log("Total Downloads for " + packageId + ": " + totalDownloads);
          $(targetSelector).text(displaydownloadstats (totalDownloads));
        },
        error: function() {
          // Handle error case for individual package request
          console.error("Error fetching details for package: " + packageId);
        }
      });
    }
    // Call the fetchPackageDetails function with the desired packageId
    var packageIdPdf = "GroupDocs.Viewer";
    var packageIdWords = "GroupDocs.Conversion";
    var packageIdCells = "GroupDocs.Comparison";
    var packageIdSlides = "GroupDocs.Parser";
    var packageIdEmail = "GroupDocs.Annotation";
    var packageIdImaging = "GroupDocs.Metadata";
    var packageIdBarCode = "GroupDocs.Assembly";
    var packageIdHtml = "GroupDocs.Signature";

    var pdfSelector = "#gdviewer";
    var wordsSelector = "#gdconversion";
    var cellsSelector = "#gdcomparison";
    var slidesSelector = "#gdparser";
    var emailSelector = "#gdannotation";
    var imagingSelector = "#gdmetadata";
    var barcodeelector = "#gdassembly";
    var htmlSelector = "#gdsignature";
    

    fetchPackageDetails(packageIdPdf, pdfSelector );
    fetchPackageDetails(packageIdWords, wordsSelector);
    fetchPackageDetails(packageIdCells, cellsSelector);
    fetchPackageDetails(packageIdSlides, slidesSelector);
    fetchPackageDetails(packageIdEmail, emailSelector);
    fetchPackageDetails(packageIdImaging, imagingSelector);
    fetchPackageDetails(packageIdBarCode, barcodeelector);
    fetchPackageDetails(packageIdHtml, htmlSelector);
  

}, 1000);    

$('.metrics-number').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 1000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now) + "K+");
      }
  });
});

$('.metrics-number2').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 1000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now) + "K+");
      }
  });
});

    function getElement(id) {
      return document.getElementById(id);
    }

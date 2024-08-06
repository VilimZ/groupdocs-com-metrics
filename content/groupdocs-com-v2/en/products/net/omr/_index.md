---
title: Accurate and Reliable .NET API for Optical Mark Recognition
description: Master OMR data extraction in forms, surveys, scanned images, documents, and more with the reliable Aspose .NET API for optical mark recognition.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="Reliable .NET API for Optical Mark Recognition"
  inheadertext="Streamline the process of recognizing, reading, and extracting human-marked OMR data from surveys, forms, answer sheets, scanned photos, and more with the Aspose OMR API for .NET. Create various forms and do much more within your .NET apps."
  ctabtn="Download Free Trial"
  ctalink="https://releases.aspose.com/omr/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="View All APIs"
  bchomelink="/"
  bchome="Home"
  bcpage="OMR"
  bclink2="Products"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview" 
subnavtxt1="Overview" 
subnav3="#support" 
subnavtxt3="Support" 
subnav4="#examples" 
subnavtxt4="Examples" 
subnav5="https://purchase.aspose.com/pricing/omr/net" 
subnavtxt5="Pricing" 
subbtn1="https://docs.aspose.com/omr/net/" 
subbtntxt1="Learn"
subbtn2="https://purchase.aspose.com/buy" 
subbtntxt2="Buy"
>}}
   {{< products/subtext-wrapper 
   sectionid="overview"
   subtitle="Explore The Power of Optical Mark Recognition in .NET"
   subtext="Aspose.OMR for .NET is an accurate and reliable optical mark recognition API, enabling developers to build high-performance solutions to read, recognize, and extract OMR data. It allows programmatically capturing data from different forms, questionnaires, examination sheets, SATs, financial applications, and more. With this API, users can seamlessly read data from scanned photos, images, or documents in PDF, PNG, JPEG, BMP, TIFF, and GIF formats and export the processed data to CSV, XML, and JSON. It supports reading data from the images captured with your smartphone camera. The .NET API offers immaculate, high-accuracy recognition, reads and adjusts skewed or rotated images, recognizes human-made marks added with pencils or pens, supports decoding barcodes or QR codes, and processes customized forms and write-in fields."
   subtext2="The .NET API for optical mark recognition helps developers create various forms using markup languages by combining the supported content or layout elements. It also recognizes data from the custom-made forms within the .NET OMR solutions. Users can inject desired personalization into the forms by adding custom branding, images, barcodes, and QR codes. It supports popular page sizes and multi-page form recognition and does not require a graphic editor or any specialized equipment or hardware to function. Aspose.OMR for .NET is a comprehensive OMR API that enables users to proficiently integrate optical mark data recognition and extraction features into their desktop apps and Windows or Web services."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Getting Started</h2>
   <p>The following information will help you conveniently set up the optical mark recognition API for .NET at your end. The <a href="https://docs.aspose.com/omr/net/system-requirements/">System Requirements</a> page provides information about the prerequisites for ensuring your system meets the recommended settings, so please visit the page before moving forward with setting up the API.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper 
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.OMR for .NET Installation"
>}}
<p>Please visit the <a href="https://releases.aspose.com/omr/net/">downloads section</a> of Aspose.OMR for .NET to download the MSI installer or the DLLs to install it. Or, you can use the <a href="https://www.nuget.org/packages/Aspose.OMR/">NuGet package</a> to install the .NET OMR library from the Visual Studio package manager consoles with the following command:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.OMR
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Create Survey Forms using JSON Markup and Extract OMR Data from Images in .NET" featuretext="Aspose.OMR for .NET includes a specialized set of features allowing developers to generate various forms, questionnaires, surveys, and exam and answer sheets. It is possible to create survey forms with the help of JSON markup in C# and extract data from such forms. If you are looking to extract OMR data from different image file formats, the .NET OMR API can help you achieve that easily. You can capture OMR data from scanned images or photos taken with your smartphone."
>}}
   
{{< products/product-feature-blocks-col
featurecolheading="Create a Survey Form with JSON Markup"
>}}
<p>Surveys are a great way to collect, analyze, and process in-depth data and information from a selective group of people. They help you understand the shortcomings in your products or services and improve them based on the feedback received. The .NET OMR API enables you to create survey forms using <a href="https://gist.github.com/aspose-com-gists/77ffea3f2a23f7a5e93f78dfdf90114f#file-createsurveyformfromjson_csharp_jsontemplate-json">JSON markup</a> in C# .NET and use them as required, as shown in the following code example.</p>
<ul>
   <li>Create an <a href="https://reference.aspose.com/omr/net/aspose.omr.api/omrengine">OmrEngine</a> class instance.</li>
   <li>With the JSON markup file path as an argument, call the <a href="https://reference.aspose.com/omr/net/aspose.omr.api/omrengine/methods/generatejsontemplate">GenerateJSONTemplate</a> method.</li>
   <li>Get results as a <a href="https://reference.aspose.com/omr/net/aspose.omr.generation/generationresult">GenerationResult</a> class object.</li>
   <li>Use the <a href="https://reference.aspose.com/omr/net/aspose.omr.generation/generationresult/methods/save">Save</a> method to save survey template images and the OMR template.</li>
   <li>Add the local directory path and the name of the template as method arguments.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// This coding example shows how to generate a Survey image and OMR from JSON markup.
// Path to the JSON file with Template Markup
string markupPath = @"D:\Files\OMR_Surveys\SimpleSurvey.json";

// Initialize OMR engine
OmrEngine engine = new OmrEngine();

// Generate Template
GenerationResult res = engine.GenerateJSONTemplate(markupPath);

// Save to the local disk
res.Save(@"D:\Files\OMR_Surveys\", "SimpleSurvey");


{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Learn to Extract OMR Data from Images"
>}}
<p>Performing OMR on images to extract information is a common requirement for developers working with optical mark recognition solutions. The .NET OMR library supports extracting data from raster images using C#, including JPEG, PNG, GIF, BMP, and TIFF. In the following C# coding example, we can learn to recognize and extract OMR data from a JPEG image.</p>
<ul>
   <li>Instantiate the <a href="https://reference.aspose.com/omr/net/aspose.omr.api/omrengine/">OmrEngine</a> class.</li>
   <li>Use the <a href="https://reference.aspose.com/omr/net/aspose.omr.api/omrengine/methods/gettemplateprocessor">GetTemplateProcessor()</a> method and initialize the <a href="https://reference.aspose.com/omr/net/aspose.omr.api/templateprocessor">TemplateProcessor</a> class object. Pass the OMR template file path as an argument.</li>
   <li>Get the <a href="https://reference.aspose.com/omr/net/aspose.omr.model/recognitionresult">RecognitionResult</a> object by calling the <a href="https://reference.aspose.com/omr/net/aspose.omr.api.templateprocessor/recognizeimage/methods/1">RecognizeImage()</a> method.</li>
   <li>Use the <a href="https://reference.aspose.com/omr/net/aspose.omr.model/recognitionresult/methods/getcsv">GetCsv()</a> method to get recognition results as CSV strings and save the result as a CSV file.</li>
   
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// OMR Template file path
string templatePath = @"E:\Files\OMR_Templates\Sheet.omr";

// Image file path
string imagePath = @"E:\Files\OMR_Images\Sheet1.jpg";

// Initialize OMR Engine
OmrEngine engine = new OmrEngine();

// Get template processor
TemplateProcessor templateProcessor = engine.GetTemplateProcessor(templatePath);

// Recognize image
RecognitionResult result = templateProcessor.RecognizeImage(imagePath);

// Get results in CSV
string csvResult = result.GetCsv();

// Save CSV file
File.WriteAllText(@"E:\Files\OMR_OutPut\Sheet1.csv", csvResult);


{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">More sample applications are available on the <a href="https://github.com/aspose-omr/Aspose.OMR-for-.NET">GitHub page</a> of the Aspose.OMR for .NET API. We provide cross-platform <a href="https://products.aspose.app/omr/family/">Free Online Image OMR Apps</a> to scan, recognize, and create answer sheets on the fly. Please be sure to check out the free OMR apps.</p>
{{< products/product-feature-blocks
featureheading="Read, Analyze, and Recognize OMR Data Independently in .NET"
featuretext="Aspose.OMR for .NET is a standalone library that ensures developers can recognize and extract OMR data from different files without any dependencies on specialized hardware or equipment. This library provides numerous possibilities for .NET developers to capture and manage human-marked OMR data with impeccable accuracy by relying only on software-based solutions, excluding any dependency on dedicated, expensive hardware. Users can seamlessly recognize OMR data from skewed or rotated images to obtain accurate results. The .NET OMR library is a one-stop solution to all your problems related to reading, analyzing, and processing optical mark recognition data across multiple .NET frameworks and development environments."
>}}
{{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
faqquery="1. How can I perform OMR on files on the .NET platform?"
faqanswer="Performing optical mark recognition on PDF and image files in .NET is quick and easy using the OMR API for .NET. It helps you seamlessly read, recognize, and process OMR data from PDF, JPEG, PNG, TIFF, GIF, and BMP files."
>}}
   {{< products/faq-block 
faqquery="2. How accurate is the .NET OMR library in recognizing and extracting human-marked data from scanned images and documents?"
faqanswer="The OMR library delivers high-accuracy recognition and extraction results and it can process skewed images and photos taken by your smartphone cameras along with the scanned images of different types."
>}}
   {{< products/faq-block
faqquery="3. Can I also create feedback forms, answer sheets, surveys, and other similar types of files using the .NET API?"
faqanswer="Yes, in addition to the optical data recognition capabilities, the .NET OMR API offers the ability to programmatically generate many kinds of forms, answer and examination sheets, surveys, questionnaires, and more."
>}}
   {{< products/faq-block
faqquery="4. Can I recognize human-marked OMR data on different operating systems?"
faqanswer="Yes, the OMR library for .NET works across different OS, frameworks, and operating environments. You can use it on the platform of your choice & it does not require any additional software installation to function."
>}}
   {{< /products/faq-wrapper >}}
   
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Looking for help?"
bartext="Checkout our support channels for help with your questions related to Aspose product API features and working."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/omr/net/"
 resourcetxt2="API Reference"
 resourcelinks2="https://reference.aspose.com/omr/net/"
 resourcetxt3="Knowledge Base"
 resourcelinks3="https://kb.aspose.com/omr/net/"
 resourcetxt4="Free Support"
 resourcelinks4="https://forum.aspose.com/c/omr/38"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Resources"
 sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogs"
 resourcealt="Blogs"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/omr/recognize-images-from-memorystream-using-omr-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/omr/create-omr-question-answer-sheet-csharp/"
 resourcelistlink3="https://blog.aspose.com/omr/csharp-optical-mark-recognition-omr-software-in-net/"
 resourcelisttext="Recognize Images from MemoryStream using C#"
 resourcelisttext2="Create OMR Sheet Checker or Scanner in C#"
 resourcelisttext3="C# Optical Mark Recognition Software in .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentation"
 resourcealt="Documentation"
 resourceimg="/images/docs1.svg"
 resourcelistlink="https://docs.aspose.com/omr/net/showcases/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.OMR/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.OMR for .NET Showcases"
 resourcelisttext2="Install Aspose.OMR for .NET NuGet Package"
 resourcelisttext3="Aspose.OMR for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Knowledge Base"
 resourcealt="Code Samples"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/omr/net/how-to-create-omr-answer-sheet-checker-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/omr/net/how-to-create-omr-answer-sheet-checker-in-c-sharp/#steps-to-create-omr-answer-sheet-checker-in-c"
 resourcelistlink3="https://kb.aspose.com/omr/net/how-to-create-omr-answer-sheet-checker-in-c-sharp/#code-to-create-omr-answer-sheet-checker-in-c"
 resourcelisttext="How to Create OMR Answer Sheet Checker in C#"
 resourcelisttext2="Steps to Create OMR Answer Sheet Checker in C#"
 resourcelisttext3="Code to Create OMR Answer Sheet Checker in C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Ready to get started?"
rtstext="Download Free Trial"
rtslink="https://releases.aspose.com/omr/net/"
rtslink2="https://products.aspose.com"
rtstext2="View All APIs"
>}}

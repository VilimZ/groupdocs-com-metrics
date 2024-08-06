---
title: .NET API for Managing and Processing Microsoft Project Files
description: A reliable .NET project management API for processing Microsoft Project files. Generate, convert, and manipulate MPP, MPT & MPX project files in .NET apps.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET API for Managing and Processing Microsoft Project Files"
  inheadertext="Seamlessly create, edit, export, and process your Microsoft Project file formats such as MPP, MPT, MPX, and XML within the C# .NET project management apps. Convert MS Project documents to PDF, Excel, Primavera, HTML, TXT, PNG, JPEG, and SVG formats using the .NET Project files processing API."
  ctabtn="Download Free Trial"
  ctalink="https://releases.aspose.com/tasks/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="View All APIs"
  bchomelink="/"
  bchome="Home"
  bcpage="Tasks"
  bclink2="Products"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Overview" 
subnav2="#features"
subnavtxt2="Features" 
subnav3="#support"
subnavtxt3="Support" 
subnav4="#examples"
subnavtxt4="Examples" 
subnav5="https://purchase.aspose.com/pricing/tasks/net"
subnavtxt5="Pricing" 
subbtn1="https://docs.aspose.com/tasks/net/"
subbtntxt1="Learn"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Buy"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="The leading project management API for processing MS Project files in .NET"
   subtext="Aspose.Tasks for .NET is a robust API to process different Microsoft Project file formats. It enables .NET developers to programmatically read, modify, convert, and export project files to multiple formats. Using this .NET API for Microsoft Project files, you can smartly manipulate your project management data and handle various resources. Aspose.Tasks for .NET is a complete project resource management solution and allows working with password-protected project documents, sorting and unlocking Microsoft Project files, resource planning and tracking, manipulating tasks, and managing costs and milestones."
   subtext2="You can also add custom Gantt Charts while exporting and printing the project files with the help of the C# .NET project management API that supports accurately converting your project files to PDF, Primavera, Excel spreadsheets, Text, HTML, JPEG, BMP, and PNG raster images and SVG vectors."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Getting Started</h2>
   <p>Please refer to the following information for setting up Aspose.Tasks for .NET library. Please check the <a href="https://docs.aspose.com/tasks/net/system-requirements/">System Requirements</a> page for a list of prerequisites before installing the .NET project management API.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Tasks for .NET Installation"
>}}
<p>To download the DLLs or the MSI installer directly, please visit the <a href="https://releases.aspose.com/tasks/net/">downloads section</a>. You can also install the .NET API for processing Microsoft Project files using the <a href="https://www.nuget.org/packages/Aspose.Tasks/">NuGet package</a>. The package manager console command for API setup is shared below:</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM > Install-Package Aspose.Tasks
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
 featureheading="How to effortlessly convert MPP project files to PDF and raster image file formats"
 featuretext="Aspose.Tasks for .NET library allows quick and easy processing of project management files and lets you convert the project files to well-known document and image file formats such as PDF, Primavera, Excel, Text, HTML, PNG, SVG, JPEG, and BMP."
>}}
   
{{< products/product-feature-blocks-col
featurecolheading="Convert MPP to PDF in .NET"
>}}
<p>Proficiently convert project files to PDF format in your .NET file conversion apps. Aspose.Tasks for .NET library enables converting the MPP files to PDF using only a few lines of .NET coding. Please check the below-given instructions and the sample code to convert MPP documents to PDF file format with the .NET API for processing Microsoft Project files:</p>
<ul>
   <li>Load the MPP file to be converted using the <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">Project class.</a></li>
   <li>Add changes to the MPP file (optional).</li>
   <li>Convert the MPP file to PDF format and export it using the <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project/methods/save/index">Save</a> method.</li>
</ul>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp2"
>}}
// Load the input Project file (MPP)
Project project = new Project("project.mpp");
// Export the output PDF file
project.Save("ExportAsPDF.pdf", SaveFileFormat.PDF);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Convert Project Files to Images"
>}}
<p>Converting your project data to PNG or JPEG images is easy using Aspose.Tasks for .NET API. It requires minimum coding and enables exporting data to image formats, allowing for convenient storage and access across multiple devices. The following information and code snippet will help you in converting Microsoft Project data to JPEG images using the .NET project management API:</p>
<ul>
   <li>Load the project MPP file using the <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">Project</a> class.</li>
   <li>Create an instance of the <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions">ImageSaveOptions</a> class using <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/savefileformat">SaveFileFormat.JPEG</a> enumeration.</li>
   <li>Specify the JPEG image quality using the <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions/properties/jpegquality">JpegQuality</a> property. The allowed value range is from 0 to 100.</li>
   <li>Convert and save the JPEG image using the <a href="https://reference.aspose.com/tasks/net/aspose.tasks.project/save/methods/6">Save</a> method.</li>
</ul>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp3"
>}}
// Load the MPP file
Project project = new Project("SourceDirectory\\Tests\\test_project.mpp");
// Create an instance of the ImageSaveOptions class
ImageSaveOptions options = new ImageSaveOptions(SaveFileFormat.JPEG) { JpegQuality = 50 };
// Export the JPEG image
project.Save("OutputDirectory\\project_image.jpeg", (SaveOptions)options);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Please visit the <a href="https://github.com/aspose-tasks/Aspose.Tasks-for-.NET/tree/master/Examples">GitHub examples</a> page of Aspose.Tasks for .NET API to view more code samples and working examples. You can view, convert, and manipulate Microsoft Project files using your desktop or mobile devices using the <a href="https://products.aspose.app/tasks/family">free online</a> project management data processing apps.</p>
{{< products/product-feature-blocks
 featureheading="Merge Microsoft Project files in C# .NET file merger apps"
 featuretext="Aspose.Tasks for .NET enables merging different files in an easy manner. Programmatically combining MPP, MPX, MPT, and JIRA files with PDF, Primavera, and other file formats is supported by the .NET project management API. Furthermore, you do not require installing Microsoft Project or Microsoft Office for manipulating project files within the C# .NET document processing apps."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. How can I convert project files in .NET?"
 faqanswer="Converting Microsoft Project files in .NET is quick and easy using Aspose.Tasks for .NET API. Only a few lines of .NET coding are needed to convert MPP, MPX, MPT, XML, and other project files to different document and image file formats."
>}}
   {{< products/faq-block 
 faqquery="2. How long it takes to convert or merge project management files?"
 faqanswer="The .NET API for managing and processing Microsoft Project files works fast and completes your merge or convert file requests in no time."
>}}
   {{< products/faq-block
 faqquery="3. Is it safe to process project management data using the .NET API?"
 faqanswer="You can be sure of the security of your project data files while processing them using Aspose.Tasks for .NET API. We ensure the privacy of your data and take all required measures to provide you with a secure user experience."
>}}
   {{< products/faq-block
 faqquery="4. Can I process project files on Mac OS, Windows, or Linux?"
 faqanswer="Yes, the project files processing API for .NET works across different OS, frameworks, and operating environments. You can use it on the platform of your choice and it does not require any additional software installation to function."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Project Management File Manipulation Tools"
>}}
   {{< products/popularapp-anchor
 anchorlink="MPP to PDF"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP to XLSX"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP to HTML"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP to JPEG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP to PNG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP to BMP"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPT to XLSX"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpt-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPT to JPEG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpt-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JIRA to MPP"
 moreproducts="https://products.aspose.com/tasks/net/merger/jira-to-mpp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="XML to MPP"
 moreproducts="https://products.aspose.com/tasks/net/merger/xml-to-mpp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPX to PDF"
 moreproducts="https://products.aspose.com/tasks/net/merger/mpx-to-pdf/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Looking for help?"
bartext="Checkout our support channels for help with your questions related to Aspose product API features and working."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/tasks/net/"
resourcetxt2="API Reference"
resourcelinks2="https://reference.aspose.com/tasks/"
resourcetxt3="Knowledge Base"
resourcelinks3="https://kb.aspose.com/tasks/net/"
resourcetxt4="Free Support"
resourcelinks4="https://forum.aspose.com/c/tasks/15"
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
resourcelistlink="https://blog.aspose.com/tasks/convert-mpp-to-mpx-in-csharp/"
resourcelistlink2="https://blog.aspose.com/tasks/convert-ms-project-to-pdf-in-csharp/"
resourcelistlink3="https://blog.aspose.com/tasks/convert-mpp-to-tiff-in-csharp/"
resourcelisttext="Convert MPP to MPX in C#"
resourcelisttext2="Convert Microsoft Project to PDF in C# .NET"
resourcelisttext3="Convert MPP to TIFF in C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Documentation"
resourcealt="Documentation"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/tasks/net/product-overview/#rich-features"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Tasks/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Tasks for .NET Features"
resourcelisttext2="Install Aspose.Tasks for .NET NuGet Package"
resourcelisttext3="Aspose.Tasks for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Knowledge Base"
resourcealt="Code Samples"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/tasks/net/how-to-convert-mpp-to-excel-using-csharp/"
resourcelistlink2="https://kb.aspose.com/tasks/net/how-to-extract-microsoft-project-file-metadata-in-c-sharp/"
resourcelistlink3="https://kb.aspose.com/tasks/net/how-to-add-weekdays-in-mpp-using-csharp/"
resourcelisttext="How to Convert MPP to Excel using C#"
resourcelisttext2="How to Extract MS Project File Metadata in C#"
resourcelisttext3="How to Add Weekdays in MPP using C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Ready to get started?"
rtstext="Download Free Trial"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="View All APIs"
>}}

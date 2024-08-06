---
title: Ultimate .NET API to Create, Edit, and Convert Photoshop Files
description: Unlock the power of Photoshop file processing and manipulation API for .NET by Aspose. Effortlessly create, edit, or convert PSD, PSB files to PDF and more.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET API to Create, Edit & Convert Photoshop Files"
  inheadertext="Take Photoshop file manipulation to the next level with the Aspose .NET API for PSD file editing and conversion. Efficiently convert PSD to PDF, JPEG, PNG, GIF, and more within your .NET apps."
  ctabtn="Download Free Trial"
  ctalink="https://releases.aspose.com/psd/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="View All APIs"
  bchomelink="/"
  bchome="Home"
  bcpage="PSD"
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
subnav5="https://purchase.aspose.com/pricing/psd/net" 
subnavtxt5="Pricing" 
subbtn1="https://docs.aspose.com/psd/net/" 
subbtntxt1="Learn"
subbtn2="https://purchase.aspose.com/buy" 
subbtntxt2="Buy"
>}}
   {{< products/subtext-wrapper 
   sectionid="overview"
   subtitle="High-performance Photoshop File Manipulation in .NET"
   subtext="Aspose.PSD for .NET is a comprehensive API to programmatically generate, process, and manipulate PSD and PSB Photoshop files. It supports reading AI files and does not require installing Adobe Photoshop or Adobe Illustrator to function. It offers extensive layer manipulation features and helps developers add text or images to layers, merge layers, update existing layer text, apply layer effects, work with adjustment layers, and export Photoshop file layers to images. The .NET API includes image manipulation tools, including resizing, cropping, and rotating images, to help you upgrade your .NET image processing apps. Furthermore, RGB, Grayscale, and CMYK color modes with 8, 16, and 32 bits per channel are supported."
   subtext2="Building high-performance Photoshop file conversion solutions is possible with the .NET PSD file manipulation API. Users can integrate image conversion capabilities into their solutions and effortlessly convert PSD to PDF, PSD to PNG, PSD to JPEG, and more. The API supports drawing and filling shapes, including rectangles, lines, ellipses, polygons, and arcs. It gives you the control to adjust the gamma, brightness, and contrast of images, in addition to dithering or blurring the images and applying median, motion wiener, Gauss wiener, and more filters to images. Aspose.PSD for .NET is the ultimate choice for anyone looking to seamlessly develop dynamic .NET solutions to create, edit, or convert Photoshop files."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Getting Started</h2>
   <p>The following information will help you easily set up Aspose.PSD for .NET at your end. Please check the list of prerequisites on the <a href="https://docs.aspose.com/psd/net/system-requirements/">System Requirements</a> page to ensure you have the recommended OS, development environment, and framework settings enabled on your system before setting up the .NET PSD file library.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper 
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.PSD for .NET Installation"
>}}
<p>Please download the MSI installer or the DLLs of the library directly from the <a href="https://releases.aspose.com/psd/net/">downloads section</a>. Or, you can use the <a href="https://www.nuget.org/packages/Aspose.PSD/">NuGet package</a> of the Photoshop file processing library for .NET and install it from the Visual Studio package manager console with the help of the following command:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.PSD
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Effortless PSD to PDF and Image Format Conversion in .NET" featuretext="Aspose.PSD for .NET API boasts excellent file conversion support for PSD to PDF, JPEG, PNG, BMP, GIF, and more formats. It provides multiple avenues to developers for efficiently converting PSD files. PSD to PDF conversion opens up countless possibilities for sharing, accessing, and viewing files across different devices or platforms. Similarly, converting Photoshop files to images with the Photoshop file processing and manipulation API helps in easy collaboration and storing of files."
>}}
   
{{< products/product-feature-blocks-col
featurecolheading="Seamless PSD to PDF Conversion in C# .NET"
>}}
<p>Build powerful file conversion solutions that allow users to easily convert PSD to PDF in .NET with the PSD conversion API for .NET. In the following coding example, we will learn how to load a Photoshop PSD file and convert it to PDF format with different options, so let’s get started.</p>
<ul>
   <li>Create a <a href="https://reference.aspose.com/psd/net/aspose.psd.fileformats.psd/psdimage/">PsdImage</a> class instance to load the source PSD file.</li>
   <li>Set PDF metadata using the <a href="https://reference.aspose.com/psd/net/aspose.psd.fileformats.pdf/pdfdocumentinfo/pdfdocumentinfo/">PdfDocumentInfo</a> class instance.</li>
   <li>Apply PDF options/properties using the <a href="https://reference.aspose.com/psd/net/aspose.psd.imageoptions/Pdfoptions/">PdfOptions</a> class.</li>
   <li>Export the converted PDF file using the Save method.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
String path = @"/Users/Documents/Examples/PsdExamples/";
using (var psdImage = (PsdImage)Image.Load(path + "AllAdjustments.psd", new PsdLoadOptions()))
{
   psdImage.Save(path + "PsdConverted_To_Pdf.pdf",
	new PdfOptions()
        {
          PdfDocumentInfo = new PdfDocumentInfo()
          {
             Author = "Aspose.PSD for .NET",
             Keywords = "Convert, PSD, PDF, HowTo",
             Subject = "Convert PSD to PDF",
             Title = "PDF From PSD",
          },
          ResolutionSettings = new ResolutionSetting(5, 6)
    });
}

{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Convert PSD to JPEG and Other Images"
>}}
<p>Converting Photoshop PSD files to popular image formats such as JPEG, PNG, BMP, GIF, and TIFF is possible using the .NET PSD manipulation library. Let’s check the following example to learn how to convert PSD to JPEG in C# .NET by setting various options for the output file.</p>
<ul>
   <li>Load the source PSD file using a <a href="https://reference.aspose.com/psd/net/aspose.psd.fileformats.psd/psdimage/">PsdImage</a> class object.</li>
   <li>Create an instance of the <a href="https://reference.aspose.com/psd/net/aspose.psd.imageoptions/jpegoptions/">JpegOptions</a> class.</li>
   <li>Set different JPEG file properties and options.</li>
   <li>Export the PSD to JPEG using the Save method.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
String path = @"/Users/Documents/Examples/PdfExamples/";
using (var psdImage = (PsdImage)Image.Load(path + "AllAdjustments.psd"))
            {
                // Set the output JPEG options
                JpegOptions jpegOptions = new JpegOptions();
                jpegOptions.Quality = 80;
                jpegOptions.JpegLsAllowedLossyError = 10;

                // Save the converted JPG on the disk
                psdImage.Save(path + "PsdConverted.jpg", jpegOptions);
            }


{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Please view more working code examples by visiting the Aspose.PSD for .NET <a href="https://github.com/aspose-psd/Aspose.PSD-for-.NET/tree/master/Examples">GitHub examples</a> page. Please check our <a href="https://products.aspose.app/psd/family/">Free Online Photoshop File Manipulation Apps</a> to view, compress, merge, resize, watermark, edit, and convert Photoshop files using your desktop or mobile devices.</p>
{{< products/product-feature-blocks
featureheading="Master Layer Manipulation in Photoshop Files in .NET"
featuretext="Aspose.PSD for .NET API offers complete layer management and manipulation functionality to developers looking to integrate such features into their applications. It enables developers to programmatically add new layers to PSD files, merge or flatten layers, find specific layers, update layer contents (text and image), add adjustment layers and fill layers, apply clipping masks, edit text layers, and do much more. With advanced PSD file editing features and the ability to manage Photoshop layers, Aspose.PSD for .NET is the preferred choice of users for manipulating PSD and PSB files on the .NET platform."
>}}
{{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
faqquery="1. How can I convert PSD files on the .NET platform?"
faqanswer="Converting PSD files in .NET is quick and easy using the Photoshop file processing API for .NET. It helps you seamlessly convert PSD files to PDF, JPEG, PNG, TIFF, BMP, and GIF formats."
>}}
   {{< products/faq-block 
faqquery="2. How long it takes to process Photoshop files and convert them?"
faqanswer="The PSD file library works fast and completes your PSD and PSB file reading, writing, converting, and processing requests in no time."
>}}
   {{< products/faq-block
faqquery="3. Is it safe to process Photoshop files using the .NET API?"
faqanswer="You can be sure of the security of your data files while processing them using the PSD file manipulation API. We ensure the privacy of your data and take all required measures to provide you with a secure user experience."
>}}
   {{< products/faq-block
faqquery="4. Can I process PSD files on different operating systems?"
faqanswer="Yes, the .NET PSD files library works across different OS, frameworks, and operating environments. You can use it on the platform of your choice & it does not require any additional software installation to function."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Photoshop File Manipulation Tools"
>}}
   {{< products/popularapp-anchor
 anchorlink="PSD to PDF"
moreproducts="https://products.aspose.com/psd/net/conversion/psd-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PSD to JPEG"
moreproducts="https://products.aspose.com/psd/net/conversion/psd-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PSD to PNG"
moreproducts="https://products.aspose.com/psd/net/conversion/psd-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PSD to BMP"
moreproducts="https://products.aspose.com/psd/net/conversion/psd-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PSD to GIF"
moreproducts="https://products.aspose.com/psd/net/conversion/psd-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PSD to TIFF"
moreproducts="https://products.aspose.com/psd/net/conversion/psd-to-tiff/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PSB to PDF"
moreproducts="https://products.aspose.com/psd/net/conversion/psb-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PSB to JPEG"
moreproducts="https://products.aspose.com/psd/net/conversion/psb-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PSB to PNG"
moreproducts="https://products.aspose.com/psd/net/conversion/psb-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PSB to BMP"
moreproducts="https://products.aspose.com/psd/net/conversion/psb-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDB to TIFF"
moreproducts="https://products.aspose.com/psd/net/conversion/psb-to-tiff/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PSB to GIF"
moreproducts="https://products.aspose.com/psd/net/conversion/psb-to-gif/"
>}}  
   
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Looking for help?"
bartext="Checkout our support channels for help with your questions related to Aspose product API features and working."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/psd/net/"
 resourcetxt2="API Reference"
 resourcelinks2="https://reference.aspose.com/psd/net/"
 resourcetxt3="Knowledge Base"
 resourcelinks3="https://kb.aspose.com/psd/net/"
 resourcetxt4="Free Support"
 resourcelinks4="https://forum.aspose.com/c/psd/34"
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
 resourcelistlink="https://blog.aspose.com/psd/adobe-illustrator-file-format-support-in-aspose.psd/"
 resourcelistlink2="https://blog.aspose.com/psd/flatten-merge-layers-in-psd-csharp/"
 resourcelistlink3="https://blog.aspose.com/psd/crop-rotate-psd-csharp/"
 resourcelisttext="Work with Adobe Illustrator Files using C#"
 resourcelisttext2="Flatten or Merge Layers in PSD Image in C#"
 resourcelisttext3="Crop or Roatate PSD Image using C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentation"
 resourcealt="Documentation"
 resourceimg="/images/docs1.svg"
 resourcelistlink="https://docs.aspose.com/psd/net/features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.PSD/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.PSD for .NET Features"
 resourcelisttext2="Install Aspose.PSD for .NET NuGet Package"
 resourcelisttext3="Aspose.PSD for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Knowledge Base"
 resourcealt="Code Samples"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/psd/net/how-to-convert-psd-to-png-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/psd/net/how-to-convert-ai-to-jpeg-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/psd/net/how-to-compress-psd-file-in-csharp/"
 resourcelisttext="How to Convert PSD to PNG in C#"
resourcelisttext2="How to Convert AI to JPEG in C#"
 resourcelisttext3="How to Compress PSD Files in C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Ready to get started?"
rtstext="Download Free Trial"
rtslink="https://releases.aspose.com/psd/net/"
rtslink2="https://products.aspose.com"
rtstext2="View All APIs"
>}}

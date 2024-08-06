---
title: .NET AutoCAD API to Easily Process and Convert CAD Files
description: Use our powerful .NET AutoCAD processing and conversion API to efficiently convert CAD files to PDF, JPEG, PNG, EMF & more file formats in your .NET apps.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET AutoCAD API to Easily Process, Convert CAD Files"
  inheadertext="Develop full-featured apps using the Aspose .NET AutoCAD API to accurately convert DWG, DXF, DWF, DGN, and more CAD and BIM files to PDF, raster images, and vectors."
  ctabtn="Download Free Trial"
  ctalink="https://releases.aspose.com/cad/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="View All APIs"
  bchomelink="/"
  bchome="Home"
  bcpage="CAD"
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
subnav5="https://purchase.aspose.com/pricing/cad/net" 
subnavtxt5="Pricing" 
subbtn1="https://docs.aspose.com/cad/net/" 
subbtntxt1="Learn"
subbtn2="https://purchase.aspose.com/buy" 
subbtntxt2="Buy"
>}}
   {{< products/subtext-wrapper 
   sectionid="overview"
   subtitle="Optimize AutoCAD File Processing and Conversion in .NET"
   subtext="Aspose.CAD for .NET is a high-performance API to render, manipulate, and convert CAD and BIM files. This .NET AutoCAD API includes features that enable developers to work with different elements of the CAD drawings. Loaded with excellent CAD file conversion capabilities, Aspose.CAD for .NET allows converting AutoCAD files to multiple formats, such as DWG to PDF, DWG to JPEG, DXF to PDF, and many more. You can optimize the AutoCAD processing workflow using the .NET API and integrate the immaculate rendering abilities into your document processing apps in .NET."
   subtext2="The .NET AutoCAD processing and conversion API offers enhanced memory management and multi-thread file processing. That makes it easy to convert or export files in bulk instead of working on one file at a time. The conversion process is fully customizable and supports tracking the file conversion with the ability to cancel the conversion if needed. It supports multiple OS, development environments, and frameworks offering a cross-platform AutoCAD file conversion experience like no other."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Getting Started</h2>
   <p>For setting up Aspose.CAD for .NET on your end, please check the information shared below. Please review a list of prerequisites on the <a href="https://docs.aspose.com/cad/net/system-requirements/">System Requirements</a> page before installing the .NET AutoCAD conversion API for a smooth user experience.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper 
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.CAD for .NET Installation"
>}}
<p>Please download the MSI installer or the DLLs directly from the <a href="https://releases.aspose.com/cad/net/">downloads section</a> to set up the AutoCAD file format conversion API for .NET. Or, you may use the <a href="https://www.nuget.org/packages/Aspose.CAD/">NuGet package</a> for installing the library. The Visual Studio Package Manager Console command is provided below:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.CAD
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Mastering AutoCAD to PDF and Raster Image Conversions in .NET" featuretext="Aspose.CAD for .NET high-fidelity conversion engine allows users to convert CAD drawings to PDF and popular raster images and vectors such as PNG, JPEG, GIF, BMP, EMF, and more. Automating CAD file conversions using the .NET CAD library helps make the process efficient. Developers can proficiently transform CAD file formats into PDF documents without any dependencies."
>}}
   
{{< products/product-feature-blocks-col
featurecolheading="Effortlessly Convert CAD to PDF in .NET"
>}}
<p>You can build feature-rich CAD converter applications on the .NET platform using the .NET AutoCAD API. Converting DWG to PDF, DWF to PDF, DGN to PDF, or DXF to PDF is simple and easy. You can apply advanced settings to the output files during the conversion process. Let’s check the following steps and sample code that highlight the conversion of DWF to PDF in .NET.</p>
<ul>
   <li>Add and Load the source DWF file in the <a href="https://apireference.aspose.com/cad/net/aspose.cad/image">Image</a> class object.</li>
   <li>Create an instance of the <a href="https://reference.aspose.com/cad/net/aspose.cad.imageoptions/cadrasterizationoptions/">CadRasterizationOptions</a> class.</li>
   <li>Set the output PDF file page size.</li>
   <li>Initialize the PdfOptions class object.</li>
   <li>Set vectorization options using the VectorRasterizationOptions property.</li>
   <li>Save the output PDF file using the Save method and the PdfOptions object.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Load the DWF file in the Image class object
using (Image image = Image.Load("sample.dwf"))
{
	// Instantiate CadRasterizationOptions class object
	CadRasterizationOptions dwfRasterizationOptions = new CadRasterizationOptions();

        // Set page size
        dwfRasterizationOptions.PageHeight = 500;
        dwfRasterizationOptions.PageWidth = 500;

        // Initialize PdfOptions object
        PdfOptions pdfOptions = new PdfOptions();

        // Set vector rasterization options
        pdfOptions.VectorRasterizationOptions = dwfRasterizationOptions;

        // Save PDF file
        image.Save("output.pdf", pdfOptions);
}

{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Convert CAD to raster images in .NET easily"
>}}
<p>The .NET AutoCAD processing API lets users seamlessly convert CAD drawings to raster images. Different AutoCAD file formats could be programmatically rendered and converted to JPEG, GIF, PNG, BMP, TIFF, and WEBP images within your .NET apps using the .NET AutoCAD conversion API. The information and code snippet shared below show how to convert DWG to JPEG in .NET.</p>
<ul>
   <li>Add the source DWG to the <a href="https://apireference.aspose.com/cad/net/aspose.cad/image">Image</a> class object.</li>
   <li>Set rasterization options for the desired JPEG file.</li>
   <li>Set the output page size.</li>
   <li>Apply the background color.</li>
   <li>Use the VectorRasterizationOptions property to set the rasterization options.</li>
   <li>Save the converted DWG to JPEG image using the Save method.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
//Load the DWG to export to JPEG 
            using (Aspose.CAD.Image image = Aspose.CAD.Image.Load("test.dwg"))
            {
                // Create an instance of CadRasterizationOptions
                Aspose.CAD.ImageOptions.CadRasterizationOptions rasterizationOptions = 
                    new Aspose.CAD.ImageOptions.CadRasterizationOptions();

                // Set page width & height
                rasterizationOptions.PageWidth = 1200;
                rasterizationOptions.PageHeight = 1200;

                //Set background color and object colors
                rasterizationOptions.BackgroundColor = Aspose.CAD.Color.White;
                rasterizationOptions.DrawType = Aspose.CAD.FileFormats.Cad.CadDrawTypeMode.UseObjectColor;

                // Create an instance of JpegOption for the converted Jpeg image
                ImageOptionsBase options = new Aspose.CAD.ImageOptions.JpegOptions();

                // Set rasterization options for exporting to JPEG
                options.VectorRasterizationOptions = rasterizationOptions;

                // Save DWG to JPEG image
                image.Save("Exported_image_out.jpeg", options);
            }

{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">You can similarly convert DXF or DGN files to JPEG format and to other raster images using the .NET CAD library. Please check more working code samples on the Aspose.CAD for .NET <a href="https://github.com/aspose-cad/Aspose.CAD-for-.NET/tree/master">GitHub examples</a> page. If you are looking to view, convert, watermark, or extract metadata and text from AutoCAD files on the fly using your mobile devices, please check out <a href="https://products.aspose.app/cad/family">Free Online CAD Files Conversion and Processing Apps.</a></p>
{{< products/product-feature-blocks
featureheading="Integrate CAD File Conversion Features into .NET Applications"
featuretext="Aspose.CAD for .NET API provides convenient workflows to convert, process, and edit AutoCAD files programmatically using .NET apps. Developers can automate AutoCAD file processing in .NET independently without needing additional third-party software installations with the .NET AutoCAD conversion API. It is packed with specific features to manipulate CAD and BIM drawings, access, edit, and search layers, objects, text, and more. Its ability to provide customizable file conversion, support for an array of AutoCAD formats, and cross-platform operability make Aspose.CAD for .NET stand out among other libraries offering similar functionality and feature sets."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
faqquery="1. How can I convert CAD to PDF in .NET?"
faqanswer="Converting CAD to PDF in .NET is quick and easy using the AutoCAD API for .NET. Users can convert DWG, DXF, DNG, and more CAD and BIM formats to PDF documents with high fidelity in their .NET apps."
>}}
   {{< products/faq-block 
faqquery="2. How long it takes to process CAD drawings and convert them to PDF or image files?"
faqanswer="The AutoCAD API for .NET works fast and completes your AutoCAD file processing and conversion requests in no time."
>}}
   {{< products/faq-block
faqquery="3. Is it safe to process CAD and BIM files using the .NET API?"
faqanswer="You can be sure of the security of your data files while processing them using the AutoCAD processing and conversion API for .NET. We ensure the privacy of your data and take all required measures to provide you with a secure user experience."
>}}
   {{< products/faq-block
faqquery="4. Can I process AutoCAD files on Mac OS, Windows, or Linux?"
faqanswer="Yes, the .NET AutoCAD processing API works across different OS, frameworks, and operating environments. You can use it on the platform of your choice. Our .NET CAD library does not require installing extra software to function."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="CAD File Format Conversion Tools"
>}}
   {{< products/popularapp-anchor
 anchorlink="DWG to PDF"
moreproducts="https://products.aspose.com/cad/net/conversion/dwg-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="DWG to DXF"
moreproducts="https://products.aspose.com/cad/net/conversion/dwg-to-dxf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="DWG to JPEG"
moreproducts="https://products.aspose.com/cad/net/conversion/dwg-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="DWG to PNG"
moreproducts="https://products.aspose.com/cad/net/conversion/dwg-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="DWG to BMP"
moreproducts="https://products.aspose.com/cad/net/conversion/dwg-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="DWG to GIF"
moreproducts="https://products.aspose.com/cad/net/conversion/dwg-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="DWG to TIFF"
moreproducts="https://products.aspose.com/cad/net/conversion/dwg-to-tiff/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="DGN to PDF"
moreproducts="https://products.aspose.com/cad/net/conversion/dgn-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="DGN to JPEG"
moreproducts="https://products.aspose.com/cad/net/conversion/dgn-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="DGN to DXF"
moreproducts="https://products.aspose.com/cad/net/conversion/dgn-to-dxf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="DGN to PNG"
moreproducts="https://products.aspose.com/cad/net/conversion/dgn-to-png/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="DGN to BMP"
moreproducts="https://products.aspose.com/cad/net/conversion/dgn-to-bmp/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="DXF to PDF"
moreproducts="https://products.aspose.com/cad/net/conversion/dxf-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="DXF to JPEG"
moreproducts="https://products.aspose.com/cad/net/conversion/dxf-to-jpeg/"
>}}
   {{< products/popularapp-anchor
 anchorlink="DXF to PNG"
moreproducts="https://products.aspose.com/cad/net/conversion/dxf-to-png/"
>}}
   {{< products/popularapp-anchor
 anchorlink="DXF to TIFF"
moreproducts="https://products.aspose.com/cad/net/conversion/dxf-to-tiff/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Looking for help?"
bartext="Checkout our support channels for help with your questions related to Aspose product API features and working."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/cad/net/"
 resourcetxt2="API Reference"
 resourcelinks2="https://reference.aspose.com/cad/net/"
 resourcetxt3="Knowledge Base"
 resourcelinks3="https://kb.aspose.com/cad/net/"
 resourcetxt4="Free Support"
 resourcelinks4="https://forum.aspose.com/c/cad/19"
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
 resourcelistlink="https://blog.aspose.com/cad/search-text-in-dwg-csharp/"
 resourcelistlink2="https://blog.aspose.com/cad/convert-obj-dxf-csharp/"
 resourcelistlink3="https://blog.aspose.com/cad/convert-collada-to-dwf-dwfx-in-csharp/"
 resourcelisttext="Search Text in DWG Drawing File in C#"
 resourcelisttext2="Convert OBJ to DXF File Programmatically in C#"
 resourcelisttext3="Convert COLLADA to DWF or DWFX in C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentation"
 resourcealt="Documentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/cad/net/features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.CAD/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.CAD for .NET Features"
 resourcelisttext2="Install Aspose.CAD for .NET NuGet Package"
 resourcelisttext3="Aspose.CAD for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Knowledge Base"
 resourcealt="Code Samples"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/cad/net/how-to-convert-iges-to-pdf-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/cad/net/how-to-convert-dwg-to-svg-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/cad/net/how-to-extract-text-from-dxf-file-in-c-sharp/"
 resourcelisttext="How to Convert IGES to PDF in C#"
resourcelisttext2="How to Convert DWG to SVG in C#"
 resourcelisttext3="How to Extract Text from DXF File in C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Ready to get started?"
rtstext="Download Free Trial"
rtslink="https://releases.aspose.com/cad/net/"
rtslink2="https://products.aspose.com"
rtstext2="View All APIs"
>}}

---
title: C# .NET Image Processing API to Manipulate and Edit Photos
description: .NET Image Processing API for creating, manipulating, and editing photos in C#, ASP.NET, or VB.NET apps. Convert images to PDF, JPG, PNG, & GIF formats.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET Image Processing API to Load, Manipulate, and Edit Photos"
  inheadertext="Streamline your image processing using this powerful and feature-rich .NET imaging API. Create, modify, and export images programmatically or quickly apply different effects and filters to photos. You can also convert your images to PDF, JPG, PNG, GIF, SVG, PSD, BMP, and other formats."
  ctabtn="Download Free Trial"
  ctalink="https://releases.aspose.com/imaging/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="View All APIs"
  bchomelink="/"
  bchome="Home"
  bcpage="Imaging"
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
subnav5="https://purchase.aspose.com/pricing/imaging/net"
subnavtxt5="Pricing" 
subbtn1="https://docs.aspose.com/imaging/net/"
subbtntxt1="Learn"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Buy"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Advanced photo editing and manipulation in C# .NET"
   subtext="Aspose.Imaging for .NET is a robust and flexible image processing API enabling C#, ASP.NET, and VB.NET developers to create, load, edit, manipulate, and convert well-known image file formats such as JPG, PNG, GIF, BMP, TIFF, EMG, SVG, and WebP among others. With a broad spectrum of supported features and exquisite image processing capabilities, Aspose.Imaging for .NET is the ideal solution for developers to incorporate image manipulation functionality into their .NET apps."
   subtext2="Transform your photos to grayscale, adjust the brightness and contrast of images, or apply other effects and filters with the help of this .NET photo editing API. It also supports programmatically resizing, compressing, cropping, deskewing, and merging images. You can convert the edited images to PDF, PSD, GIF, PNG, JPEG, and other file types. This image processing API for .NET keeps you on top of your photo editing and manipulation needs."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Getting Started</h2>
   <p>Please review the <a href="https://docs.aspose.com/imaging/net/system-requirements/">System Requirements</a> page to check the prerequisites for setting up the .NET image API at your end without any problems.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Imaging for .NET Installation"
>}} 
<p>Please download the DLLs or the MSI installer from the <a href="https://releases.aspose.com/imaging/net/">downloads section</a> to install the .NET image processing API. Alternatively, you can also use the <a href="https://www.nuget.org/packages/Aspose.Imaging/">NuGet package</a> for setting up the API. The command for the package manager console is provided below:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}} 
PM > Install-Package Aspose.Imaging 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="How to Convert Images in .NET and Rotate or Flip an Image"
featuretext="Aspose.Imaging for .NET enables programmatically converting images to different file formats. It allows .NET developers to convert well-known raster and vector images such as PNG, JPG, BMP, GIF, TIFF, SVG, EPS, CDR, EMF, and WebP. You can also flip and rotate images within your .NET image processing apps."
>}} 
   
{{< products/product-feature-blocks-col
featurecolheading="Convert Images to PDF, JPG, PNG, and other formats in .NET"
>}} 
<p>With the help of the .NET imaging API, developers can effortlessly convert images to PDF, JPG, PNG, BMP, GIF, SVG, and other formats. Converting PNG to JPG is a popular image conversion option to help transform photos or scanned images from one file format to another. Aspose.Imaging for .NET library allows this conversion using minimum coding. Please check the following information for more help:</p>
<ul>
   <li>Load the source PNG file using the <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a> class.</li>
   <li>Convert PNG to JPG using Image.Save(string, JpegOptions) method.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}} 
// Load the PNG image
using (Image image = Image.Load("test.png"))
{              
    // Save the image as JPG
    image.Save("PNG-to-JPG.jpg", new JpegOptions());
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Flip or Rotate Images in your .NET Image Processing Apps"
>}} 
<p>You can augment your .NET image manipulation apps by incorporating photo editing features like flipping and rotating images. Aspose.Imaging for .NET API lets you rotate an image by 90, 180, and 270 degrees in addition to the ability to flip it horizontally or vertically. The below-given steps and C# code snippet offer more help:</p>
<ul>
   <li>Load the image file using the <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a> class.</li>
   <li>Rotate the image by 180 degrees and flip it horizontally using <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image/methods/rotateflip">Image.RotateFlip(RotateFlipType.Rotate180FlipX)</a> method.</li>
   <li>Save the updated image using <a href="https://reference.aspose.com/imaging/net/aspose.imaging.image/save/methods/3">Image.Save(string)</a> method.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}} 
// Load an image in an instance of Image
using (Image image = Image.Load("image.bmp"))
{
    // Rotate and flip the image
    image.RotateFlip(RotateFlipType.Rotate180FlipX);

    // Save the processed image
    image.Save("image-rotated-flipped.bmp");
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">For more working examples of Aspose.Imaging for .NET API, please visit the <a href="https://github.com/aspose-imaging/Aspose.Imaging-for-.NET/tree/master/Examples">GitHub Examples</a> page. If you are looking to convert, resize, compress, watermark, rotate, flip, crop, deskew, edit, or merge your multi-format images on the fly, please check the <a href="https://products.aspose.app/imaging/family">free online apps</a> of Aspose.Imaging.</p>
{{< products/product-feature-blocks
featureheading="Add image compression capability to your .NET image manipulation apps"
featuretext="Aspose.Imaging for .NET allows compressing images to help reduce the size of image files. The excellent image compression algorithms of this .NET imaging API let you reduce the file size by 30 – 70% without compromising image quality. This way, you can efficiently store and transfer image files without worrying about file size."
>}} 
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}} 
   {{< products/faq-block
  
 faqquery="1. How can I convert image files in .NET?"
  
 faqanswer="Converting images such as JPG, PNG, BMP, GIF, SVG, CDR, TIFF, EMF, EPS, and may more in .NET is quick and easy using Aspose.Imaging for .NET API. Only a few lines of .NET coding are needed to convert your multi-format images to different file formats."
>}} 
   {{< products/faq-block 
 faqquery="2. How long it takes to merge or convert images?"
 faqanswer="The .NET image processing API works fast and completes your image conversion and merger requests in no time."
>}} 
   {{< products/faq-block
 faqquery="3. Is it safe to process photos and images using the .NET API?"
 faqanswer="You can be sure of the security of your photos and images while processing them using Aspose.Imaging for .NET API. We ensure the privacy of your data and take all required measures to provide you with a secure user experience."
>}} 
   {{< products/faq-block
 faqquery="4. Can I process image files on Mac OS, Windows, or Linux?"
 faqanswer="Yes, the imaging API for .NET works across different OS, frameworks, and operating environments. You can use it on the platform of your choice and it does not require any additional software installation to function."
>}} 
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper 
   popularheading="Photo and Image Manipulation Tools"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG to PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/jpeg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG to PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/png-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG to PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/svg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG to PSD"
moreproducts="https://products.aspose.com/imaging/net/conversion/jpeg-to-psd/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG to JPEG"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/SVG-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP to WEBP"
moreproducts="https://products.aspose.com/imaging/net/conversion/bmp-to-webp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF to SVG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-svg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF to JPEG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="CDR to PNG"
moreproducts="https://products.aspose.com/imaging/net/conversion/cdr-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Merge JPG"
moreproducts="https://products.aspose.com/imaging/net/merge/jpg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Merge TIFF"
moreproducts="https://products.aspose.com/imaging/net/merge/tiff/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="Merge PNG"
moreproducts="https://products.aspose.com/imaging/net/merge/png/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Looking for help?"
bartext="Checkout our support channels for help with your questions related to Aspose product API features and working."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/imaging/net/"
 resourcetxt2="API Reference"
 resourcelinks2="https://reference.aspose.com/imaging/" 
 resourcetxt3="Knowledge Base"
 resourcelinks3="https://kb.aspose.com/imaging/net/"
 resourcetxt4="Free Support"
 resourcelinks4="https://forum.aspose.com/c/imaging/14"
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
 resourcelistlink="https://blog.aspose.com/imaging/draw-shapes-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/imaging/blur-images-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/imaging/adjust-image-contrast-brightness-gamma-csharp/"
 resourcelisttext="Draw Shapes in C# - Lines, Arcs, and Rectangles"
 resourcelisttext2="Blur Images Programmatically in C#"
 resourcelisttext3="Adjust Image Contract, Brightness, and Gamma"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentation"
 resourcealt="Documentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/imaging/net/features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Imaging/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Imaging for .NET Features"
 resourcelisttext2="Install Aspose.Imaging for .NET NuGet Package"
 resourcelisttext3="Aspose.Imaging for .NET Paid Support Helpdesk"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Knowledge Base"
 resourcealt="Code Samples"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/imaging/net/how-to-compress-image-size-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/imaging/net/how-to-draw-graphics-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/imaging/net/how-to-resize-image-in-c-sharp/"
 resourcelisttext="How to Compress Image Size in C#"
resourcelisttext2="How to Draw Graphics in C#"
resourcelisttext3="How to Resize Image in C#"
>}} 
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Ready to get started?"
rtstext="Download Free Trial"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="View All APIs"
>}} 

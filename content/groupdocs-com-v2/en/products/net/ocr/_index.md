---
title: Powerful OCR API for .NET to Perform Precise Text Recognition
description: Use Aspose Optical Character Recognition (OCR) API for .NET to accurately recognize & extract text from images, convert images and PDFs to text, and more.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="Powerful .NET OCR API to Perform Text Recognition"
  inheadertext="Integrate advanced OCR capabilities into your apps with Aspose Optical Character Recognition API for .NET. Seamlessly recognize and extract text from PNG, JPG, GIF, and BMP images, scanned photos, and PDFs, or convert images or PDFs to text."
  ctabtn="Download Free Trial"
  ctalink="https://releases.aspose.com/ocr/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="View All APIs"
  bchomelink="/"
  bchome="Home"
  bcpage="OCR"
  bclink2="Products"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview" subnavtxt1="Overview" 
subnav2="#features" subnavtxt2="Features" 
subnav3="#support" subnavtxt3="Support" 
subnav4="#examples" subnavtxt4="Examples" 
subnav5="https://purchase.aspose.com/pricing/ocr/net"
subnavtxt5="Pricing" 
subbtn1="https://docs.aspose.com/ocr/net/"
subbtntxt1="Learn"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Buy"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle=".NET OCR Engine with Superior Speed and Accuracy"
   subtext="Aspose.OCR for .NET is an advanced, efficient, and accurate optical character recognition API for effortlessly recognizing text in images and PDFs. It helps develop OCR functionality for .NET applications and offers enhanced processing speed, accuracy, and a comprehensive feature set. The powerful .NET OCR engine lets you perform precise text recognition and extraction from PDF files and JPEG, GIF, PNG, TIFF, and BMP images. You can build automated solutions for converting images and PDF documents to text, Word, Excel, XML, and JSON formats with the help of the OCR API for .NET."
   subtext2="Developers can enjoy a cross-platform text extraction experience using the Aspose.OCR for .NET API, as it can perform identically across Windows, Mac OS, and Linux-based environments. The API supports 27 different languages in Latin and Cyrillic scripts and thousands of Chinese characters and enables detecting and recognizing well-known typefaces. Additionally, you can recognize text from your scanned photos with the built-in ability to process noisy, skewed, or rotated images. Aspose.OCR for .NET library is a complete image analysis and text extraction solution that could augment your existing apps or help you create professional OCR solutions from scratch."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Getting Started</h2>
   <p>To correctly set up and use the .NET OCR API, please check the below-given details. It is advised to please refer to the list of prerequisites on the <a href="https://docs.aspose.com/ocr/net/system-requirements/">System Requirements</a> page for the smooth installation of the optical character recognition API for .NET.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.OCR for .NET Installation"
>}}
<p>You can install the OCR library for C# .NET by downloading the MSI installer or DLLs from the <a href="https://releases.aspose.com/ocr/net/">downloads section</a>. Or, you can use the <a href="https://www.nuget.org/packages/Aspose.OCR/">NuGet package</a> for setting it up. The command for the Visual Studio package manager console is provided below:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.OCR
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Efficiently Perform OCR on PDF Documents and Convert Images to Text"
featuretext="Aspose.OCR for .NET API is an excellent choice for seamlessly performing optical character recognition (OCR) for .NET developers. Applying OCR to PDF documents and converting the recognized text to Word format requires only a few lines of code. Similarly, you can build image to text converter solutions using the text recognition library for C# .NET."
>}}
   
{{< products/product-feature-blocks-col
featurecolheading="Recognize and extract text from PDF documents in .NET"
>}}
<p>Optical character recognition for scanned PDF documents is made simple with the help of Aspose.OCR for .NET. It is one of the most well-liked features of the .NET PDF document OCR API and equips anyone working with the API with all the required tools to recognize, extract, and convert text from PDF documents to multiple formats. Let’s take a look at the steps needed to perform OCR on PDF documents and convert the extracted text from PDF to Word format:</p>
<ul>
   <li>Instantiate the <strong>AsposeOcr</strong> class.</a></li>
   <li>Create an object of the <strong>DocumentRecognitionSettings</strong> class.</li>
   <li>Specify the OCR language.</li>
   <li>Call the <strong>RecognizePdf()</strong> method to get <strong>RecognitionResult</strong>. Add file path and <strong>DocumentRecognitionSettings</strong> object as arguments.</li>
   <li>Save the text using the <strong>SaveMultipageDocument()</strong> method. Add the output file path, the <strong>SaveFormat</strong>, and <strong>RecognitionResult</strong> objects as arguments</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// This code example demonstrates how to OCR PDF documents and save the recognized text as DOCX.
// Initialize the PCR engine
AsposeOcr recognitionEngine = new AsposeOcr();
// Initialize recognition settings
DocumentRecognitionSettings recognitionSettings = new DocumentRecognitionSettings();
// Specify language for OCR. Multi-language by default
recognitionSettings.Language = Language.Eng;
// Recognize text from PDF
List<RecognitionResult> results = recognitionEngine.RecognizePdf("C:\\MyFiles\\test.pdf", recognitionSettings);

// Save the recognized text as Word (DOCX) file
AsposeOcr.SaveMultipageDocument("C:\\Files\\OCR_result.docx", SaveFormat.Docx, results);

{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Effortlessly Convert Images to Searchable PDFs in .NET"
>}}
<p>The high-performance .NET OCR API allows developers to extract searchable text from scanned images and photos of different commonly-used image formats such as GIF, PNG, JPG, BMP, and TIFF. If you are looking to integrate OCR capabilities into your .NET apps, the image to text conversion feature could bolster them. Here, we will review the steps required for efficiently converting JPG to PDF using the robust OCR API for .NET:</p>
<ul>
   <li>Set input image file path for text recognition.</li>
   <li>Create an <strong>AsposeOcr</strong> class instance</li>
   <li>Use the <strong>RecognizeImage</strong> method to recognize text in your selected image file.</li>
   <li>Save the processed file using the <strong>Save</strong> method, and add the output file name and the <strong>SaveFormat</strong> as arguments.</li>
   <li>Ensure setting the resultant file to a searchable PDF document using <strong>SaveFormat</strong>.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Set path for input image to recognize
string image = "OCR_test.jpg";
// Initialize AsposeOcr class instance
AsposeOcr api = new AsposeOcr();
// Recognize input image with RecognizeImage method
RecognitionResult result = api.RecognizeImage(image, new RecognitionSettings());
// Save output to searchable PDF file
result.Save("OCR_output.pdf", SaveFormat.Pdf);

{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">The GitHub <a href="https://github.com/aspose-ocr/Aspose.OCR-for-.NET/tree/master/Examples">examples page</a> of the Aspose Optical Character Recognition API for .NET includes more working code samples, please feel free to check them out. We also provide <a href="https://products.aspose.app/ocr/family">Free Online PDF OCR and Image to Text Converter</a>, text recognition, and extract apps. You can use these free OCR apps on the fly using your mobile devices.</p>
{{< products/product-feature-blocks
featureheading="Easy-to-use .NET OCR Library for Text Extraction in Photos"
featuretext="Are you having difficulty reading and extracting text from scanned images? If yes, use Aspose.OCR for .NET, as it is the best OCR API for image analysis and text extraction from scanned photos, smartphone images, and more. Using this API, you can programmatically recognize text in images and convert it to different file formats. Furthermore, the image to text conversion API includes advanced functions such as spell-checking and character replacement for visually defective texts. It could easily read such texts, check the spelling, and replace any distorted characters from the misspelled text on the image. While running image OCR, you can provide the link to an image file as a source. It is possible to scan and recognize text from a complete image or only a select part of the image for this process. Proficiently develop full-featured image to text converter apps using the .NET image OCR API and easily convert JPEG to text, PNG to text, BMP to text, and more."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. How can I convert images to text in .NET?"
 faqanswer="Converting images to text in .NET is quick and easy using the .NET OCR API. Only a few lines of .NET coding are needed to convert JPG, BMP, GIF, PNG, TIFF, and other image files to PDF, Word, Excel, JSON, Plain Text, and XML formats."
>}}
   {{< products/faq-block 
 faqquery="2. How long it takes to convert image or PDF files to text?"
 faqanswer="The best OCR API for .NET works fast and completes your text recognition, extraction, and conversion requests in no time."
>}}
   {{< products/faq-block
 faqquery="3. Is it safe to process scanned images and PDFs using the .NET API?"
 faqanswer="You can be sure of the security of your data files while processing them using the optical character recognition API for .NET. We ensure the privacy of your data and take all required measures to provide you with a secure user experience."
>}}
   {{< products/faq-block
 faqquery="4. Can I process photos and PDF files on Mac OS, Windows, or Linux?"
 faqanswer="Yes, the text recognition and image to text conversion API for .NET works across different OS, frameworks, and operating environments. You can use it on the platform of your choice and it does not require any additional software installation to function."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper popularheading="Optical Character Recognition Tools"
>}}
   {{< products/popularapp-anchor
 anchorlink="JPEG to TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG to TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF to TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP to TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="TIFF to TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/tiff-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG to PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-pdf"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG to Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-docx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG to Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-xlsx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG to XML"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-xml"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG to Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-docx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG to Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-xls"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PNG to PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-pdf"
>}}  
   {{< products/popularapp-anchor
 anchorlink="GIF to Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-doc"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF to PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-pdf"
>}}
   {{< products/popularapp-anchor
 anchorlink="BMP to Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-docx"
>}}
   {{< products/popularapp-anchor
 anchorlink="BMP to Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-xls"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Looking for help?"
bartext="Checkout our support channels for help with your questions related to Aspose product API features and working."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/ocr/net/"
 resourcetxt2="API Reference"
 resourcelinks2="https://reference.aspose.com/ocr/net/" 
 resourcetxt3="Knowledge Base"
 resourcelinks3="https://kb.aspose.com/ocr/net/"
 resourcetxt4="Free Support"
 resourcelinks4="https://forum.aspose.com/c/ocr/16"
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
 resourcelistlink="https://blog.aspose.com/ocr/skew-correction-in-image-processing-using-csharp/"
 resourcelistlink2="https://blog.aspose.com/ocr/convert-screenshot-to-text-with-ocr-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/ocr/image-to-excel-ocr-csharp/"
 resourcelisttext="Skew Correction in Image Processing using C#"
 resourcelisttext2="Convert Screenshots to Text with OCR in C#"
 resourcelisttext3="Convert Image to Excel with OCR in C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentation"
 resourcealt="Documentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/ocr/net/how-to-run-the-examples/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.OCR/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="How to Run Examples"
 resourcelisttext2="Install Aspose.OCR for .NET NuGet Package"
 resourcelisttext3="Aspose.OCR for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Knowledge Base"
 resourcealt="Code Samples"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/ocr/net/how-to-extract-text-from-scanned-pdf-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/ocr/net/how-to-extract-text-from-image-in-csharp/"
 resourcelisttext="How to Extract Text from Scanned PDF in C#"
resourcelisttext2="How to Extract Text from Image in C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Ready to get started?"
rtstext="Download Free Trial"
rtslink="https://releases.aspose.com/ocr/net/" 
rtslink2="https://products.aspose.com" 
rtstext2="View All APIs"
>}}

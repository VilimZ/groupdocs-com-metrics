---
title: Excel spreadsheet file formats processing API for C# .NET
description: A robust .NET Excel library to create, view, and process Excel spreadsheets in C#, ASP.NET, and VB.NET. Convert Excel to PDF, JPEG, HTML & other formats.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="Excel spreadsheet file formats processing API for C# .NET"
  inheadertext="Load, render, and manipulate XLS, XLSX, XLSM, XLT, ODS, CSV, and other Microsoft Excel file formats on .NET Core, and Xamarin platforms. Build spreadsheet processing apps in ASP.NET and VB.NET to convert Excel to PDF, Excel to JPG, and many other formats."
  ctabtn="Download Free Trial"
  ctalink="https://releases.aspose.com/cells/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="View All APIs"
  bchomelink="/"
  bchome="Home"
  bcpage="Cells"
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
subnav5="https://purchase.aspose.com/pricing/cells/net" 
subnavtxt5="Pricing" 
subbtn1="https://docs.aspose.com/cells/net/" 
subbtntxt1="Learn"
subbtn2="https://purchase.aspose.com/buy" 
subbtntxt2="Buy"
>}}
   {{< products/subtext-wrapper 
   sectionid="overview"
   subtitle="High-performance Excel spreadsheet processing in .NET"
   subtext="Aspose.Cells for .NET is a reliable and feature-rich library enabling .NET developers to create, load, render, and export Excel spreadsheet files within C#, ASP.NET, and VB.NET apps. Using this library, you can read, view, edit, and write Excel sheets and perform advanced tasks such as calculating formulas, managing charts and pivot tables, and formatting text in spreadsheets. Furthermore, you can also work with features like managing worksheet rows, columns, and cells, applying conditional formatting, manipulating data validation rules, named ranges, and much more. Aspose.Cells for .NET API supports a wide range of well-known file formats such as XLS, XLT, XLSM, XLSX, XLTX, XLTM, ODS, CSV, TSV, and HTML." 
   subtext2="There is no dependency on Microsoft Excel or any external software while using Aspose.Cells for .NET, allowing users to enjoy a fully independent, cross-platform spreadsheet manipulation experience. Developers can build smart Excel file conversion apps to flawlessly convert Excel to PDF, Excel to JPG, Excel to HTML, and other file types using this spreadsheet processing API for C# .NET."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Getting Started</h2>
   <p>Please check the following information to correctly set up and use Aspose.Cells for .NET API. Please also refer to the <a href="https://docs.aspose.com/cells/net/system-requirements/">System Requirements</a> page for a list of prerequisites to successfully set up the Excel Documents API for .NET</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper 
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Cells for .NET Installation"
>}}
<p>To set up Aspose.Cells for .NET on your system, please directly download the DLLs or the MSI Installer from the <a href="https://releases.aspose.com/cells/net/">downloads section</a>. Or, you can use the <a href="https://www.nuget.org/packages/Aspose.Cells/">NuGet package</a> for the .NET spreadsheet processing API installation. The package manager command is given below.</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM> Install-Package Aspose.Cells
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="How to Convert Excel to PDF in .NET and Quickly Merge Excel Workbooks"
featuretext="Aspose.Cells for .NET API enables .NET developers proficiently convert Microsoft Excel workbooks to different file formats. Converting Excel to PDF is easy using the .NET Excel API that lets you convert XLS to PDF and XLSX to PDF within your .NET file conversion apps. Additionally, you can merge Excel workbooks and save the processed document as a unified file with the help of the .NET spreadsheet processing API."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Convert Excel to PDF in .NET"
>}}
<p>Upgrade your .NET file converter apps by integrating the Excel to PDF conversion functionality using Aspose.Cells for .NET library. Effortlessly convert XLS and XLSX files to PDF format using a minimum amount of code. Please refer to the following information and sample coding to convert Excel to PDF in the .NET platform:</p>
<ul>
   <li>Create an instance of the <a href="https://reference.aspose.com/net/cells/aspose.cells/workbook">Workbook</a> class and add the Excel document you wish to convert.</li>
   <li>Save the Excel document to PDF format using the <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/save/#save_3">Save</a> method. Specify PDF format using the <a href="https://reference.aspose.com/net/cells/aspose.cells/saveformat">SaveFormat</a> Enumeration.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Instantiate the Workbook object with the Excel file
Workbook workbook = new Workbook("SampleExcel.xls");
// Save the document in PDF format
workbook.Save("outputPDF.pdf", SaveFormat.Pdf);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col 
featurecolheading="Merge MS Excel Workbooks in .NET"
>}}
<p>Programmatically merge multiple Excel workbooks and combine them into a single Excel file with the help of Aspose.Cells for .NET API. Enhance your .NET document merger apps by injecting MS Excel workbooks merger functionality. Please review the below-given code snippet and the information for combining multiple workbooks:</p>
<ul>
   <li>Create two instance of the <a href="https://reference.aspose.com/net/cells/aspose.cells/workbook">Workbook</a> class, one each for the two workbooks to be combined.</li>
   <li>Merge the two workbooks using the <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/combine/">Combine</a> method</li>
   <li>Save the combined Excel workbook using the <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/save#save_2">Save</a> method.</li>
</ul>
{{< products/product-feature-blocks-snip 
snipclass="greysnipp" 
copyID="snipp3"
>}}
// Define the first source workbook
// Open the first excel file.
Workbook SourceBook1 = new Workbook(dataDir+ "SampleChart.xlsx");

// Define the second source workbook.
// Open the second excel file.
Workbook SourceBook2 = new Workbook(dataDir+ "SampleImage.xlsx");

// Combine the two workbooks
SourceBook1.Combine(SourceBook2);

// Save the target book file.
SourceBook1.Save("Combined.out.xlsx");
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">To check more working examples of Aspose.Cells for .NET API, please visit the <a href="https://github.com/aspose-cells/Aspose.Cells-for-.NET/tree/master/Examples">GitHub examples</a> page. You can view, edit, convert, merge, split, annotate, watermark, parse, compare, compress, or search the Excel documents from anywhere using your mobile devices. Please check <a href="https://products.aspose.app/cells/family">Aspose.Cells Free Online Apps</a> for on-the-fly Excel spreadsheet manipulation.</p>
{{< products/product-feature-blocks
featureheading="GUI controls and advanced formula calculations in .NET"
featuretext="Quickly generate professional-looking spreadsheets complete with pivot tables and charts using the GUI controls offered by Aspose.Cells for .NET API. Help yourself create interactive desktop and web-based Excel spreadsheet apps without the need for extensive coding. On top of the Graphical Interface features, this .NET spreadsheet processing library supports many standard and advanced functions, operators, and a comprehensive formula calculation system capable of handling complex formulas."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper 
   faqtitle="FAQ"
>}}
   {{< products/faq-block
   faqquery="1. How can I convert Excel documents in .NET?"
   faqanswer="Converting Microsoft Excel documents in .NET is quick and easy using Aspose.Cells for .NET API. You can convert Microsoft Excel spreadsheets in .NET to different file formats using minimum coding."
>}}
   {{< products/faq-block
   faqquery="2. How long it takes to convert or process Excel spreadsheets?"
   faqanswer="The .NET spreadsheet API offers lightning fast processing speeds and carries out document conversion and processing very quickly."
>}}
   {{< products/faq-block
   faqquery="3. Is it safe to process MS Excel documents using a the .NET spreadsheet processing API?"
   faqanswer="Of course! You can rest assured about the security of your documents while processing them using Aspose.Cells for .NET API. We ensure the privacy of your data and take all required measures to provide you with a secure user experience."
>}}
   {{< products/faq-block
   faqquery="4. Can I process Microsoft Excel documents on Mac OS, Windows, or Linux?"
   faqanswer="Yes, the .NET API works across different OS, frameworks, and operating environments. You can use it on the platform of your choice. The .NET Excel documents processing library does not require any additional software installation to work."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Excel Spreadsheets Manipulation Tools"
>}}
   {{< products/popularapp-anchor
anchorlink="Excel to PDF"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel to JPG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-jpg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel to PNG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-png/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel to HTML"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-html/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel to ODS"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-ods/"
>}} 
   {{< products/popularapp-anchor
anchorlink="XLSX to CSV"
moreproducts="https://products.aspose.com/cells/net/conversion/xlsx-to-csv/"
>}} 
   {{< products/popularapp-anchor
anchorlink="XLSX to XPS"
moreproducts="https://products.aspose.com/cells/net/conversion/xlsx-to-xps/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel to JSON"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-json/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel to SVG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-svg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel to TSV"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-tsv/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel to MD"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-md/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel to TXT"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-txt/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Looking for help?"
bartext="Checkout our support channels for help with your questions related to Aspose product API features and working."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/cells/net/"
resourcetxt2="API Reference"
resourcelinks2="https://reference.aspose.com/cells/" 
resourcetxt3="Knowledge Base"
resourcelinks3="https://kb.aspose.com/cells/net/"
resourcetxt4="Free Support"
resourcelinks4="https://forum.aspose.com/c/cells/9"
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
resourcelistlink="https://blog.aspose.com/cells/convert-csv-to-json-csharp/"
resourcelistlink2="https://blog.aspose.com/cells/adjust-row-height-column-width-in-excel-csharp/"
resourcelistlink3="https://blog.aspose.com/cells/excel-to-csv-csharp/"
resourcelisttext="Convert CSV to JSON in C#"
resourcelisttext2="Adjust Row Height and Column Width in Excel"
resourcelisttext3="Convert Excel XLS XLSX to CSV in C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Documentation"
resourcealt="Documentation"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/cells/net/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Cells/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Cells for .NET Docs"
resourcelisttext2="Install Aspose.Cells for .NET NuGet Package"
resourcelisttext3="Aspose.Cells for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Knowledge Base"
resourcealt="Code Samples"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/cells/net/how-to-insert-comment-in-excel-using-csharp/"
resourcelistlink2="https://kb.aspose.com/cells/net/how-to-create-pivot-table-in-excel-using-csharp/"
resourcelistlink3="https://kb.aspose.com/cells/net/how-to-rotate-a-cell-in-excel-using-csharp/"
resourcelisttext="How to Insert a Comment in Excel using C#"
resourcelisttext2="How to Create a Pivot Table in Excel using C#"
resourcelisttext3="How to Rotate a Cell in Excel using C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Ready to get started?"
rtstext="Download Free Trial"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="View All APIs"
>}}

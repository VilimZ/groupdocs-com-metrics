---
title: Easy to Use .NET API for Financial Documents Processing
description: Empower your financial analysis apps with Aspose .NET API for financial documents processing. Effortlessly create reports, or read, and convert XBRL files.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET API for Financial Documents Processing"
  inheadertext="Empower financial analysis with detailed reporting using our API. Read and validate XBRL and iXBRL files, or easily convert XBRL to XLSX in your finance management apps."
  ctabtn="Download Free Trial"
  ctalink="https://releases.aspose.com/finance/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="View All APIs"
  bchomelink="/"
  bchome="Home"
  bcpage="Finance"
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
subnav5="https://purchase.aspose.com/pricing/finance/net" 
subnavtxt5="Pricing" 
subbtn1="https://docs.aspose.com/finance/net/" 
subbtntxt1="Learn"
subbtn2="https://purchase.aspose.com/buy" 
subbtntxt2="Buy"
>}}
   {{< products/subtext-wrapper 
   sectionid="overview"
   subtitle="Effortless Financial Data Processing and Reporting in .NET"
   subtext="Aspose.Finance for .NET helps developers seamlessly process file formats used in financial analysis, reporting, and data management. Developers can read, import, export, and validate XBRL and iXBRL documents and create and convert XBRL files using our API. Optimizing your financial solutions becomes easier by incorporating more features to augment their functionality with the help of the .NET financial documents processing API. You can also work with OFX documents by programmatically creating OFX request and response files within your digital finance data exchange apps."
   subtext2="Our API is the perfect choice for software developers looking to enhance the financial reporting capabilities of their data management systems. By integrating detailed report generation, end users can make informed decisions about better managing financial data. Reading finance-related document formats requires only a few lines of coding, thus simplifying the development process. Aspose.Finance for .NET is loaded with easy to use methods to take your financial data processing to the next level."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Getting Started</h2>
   <p>Please view a list of recommended settings related to the operating systems and frameworks on the <a href="https://docs.aspose.com/finance/net/system-requirements/">System Requirements</a> page. Before you install and get started with the .NET financial documents processing API, please visit this page and ensure compliance with the outlined requirements for an issue-free API usage experience.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper 
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Finance for .NET Installation"
>}}
<p>You can install the .NET finance documents library by downloading the MSI installer or the DLLs from the <a href="https://releases.aspose.com/finance/net/">downloads section</a>. Or, you can use the <a href="https://releases.aspose.com/finance/net/">NuGet package</a> for setting up the library. The command for the Visual Studio package manager console is shared below:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Finance
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Master XBRL Document Creation and XBRL to XLSX Conversion in .NET" featuretext="Aspose.Finance for .NET lets you read, create, validate, and convert XBRL (eXtensible Business Reporting Language) documents within your applications. It provides various advanced functions to add schema references, units, and fact and context objects to the XBRL files. Our API also supports converting the XBRL documents to XLSX file format, making it convenient to view and analyze financial reporting data. In this section, we will learn all about both these features with the help of C# coding examples."
>}}
   
{{< products/product-feature-blocks-col
featurecolheading="Create XBRL Document Instance using C#"
>}}
<p>The .NET API for financial documents processing provides advanced XBRL document creation methods. The information and code example given below share more insight.</p>
<ul>
   <li>Create an instance of the <a href="https://reference.aspose.com/finance/net/aspose.finance.xbrl/xbrldocument">XbrlDocument</a> class.</li>
   <li>Access the instance collection of XbrlDocument object using <a href="https://reference.aspose.com/finance/net/aspose.finance.xbrl/xbrlinstancecollection">XbrlInstanceCollection</a>.</li>
   <li>Add a new XBRL instance using the <a href="https://reference.aspose.com/finance/net/aspose.finance.xbrl/xbrlinstancecollection/methods/add">Add()</a> method.</li>
   <li>And save the XBRL file using the <a href="https://reference.aspose.com/finance/net/aspose.finance.xbrl/xbrldocument/methods/save">Save()</a> method.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// This code example shows how to create an XBRL instance document.
// Create an instance of the XbrlDocument class
XbrlDocument document = new XbrlDocument();

// Get XbrlInstances
XbrlInstanceCollection xbrlInstances = document.XbrlInstances;

// Add XbrlInstance
xbrlInstances.Add();

// Save the output document
document.Save(@"C:\Files\Finance\generated.xbrl");

{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Convert XBRL to XLSX using C#"
>}}
<p>Using our API, developers can easily convert XBRL documents to Microsoft Excel worksheet (XLSX) format and improve data access and review. Please check the following C# coding example to learn how to convert XBRL to XLSX.</p>
<ul>
   <li>Load source XBRL file using an XbrlDocument object.</li>
   <li>Apply the <a href="https://reference.aspose.com/finance/net/aspose.finance.xbrl/saveoptions">SaveOptions</a> for the output document.</li>
   <li>Convert XBRL to XLSX Excel Worksheet format using the Save method.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Load the input XBRL file
XbrlDocument document = new XbrlDocument(sourceDir + @"IdScopeContextPeriodStartAfterEnd.xml");

// Apply SaveOptions for the output file
SaveOptions saveOptions = new SaveOptions();
saveOptions.SaveFormat = SaveFormat.XLSX;

// Convert XBRL to XLSX Excel Worksheet format
document.Save(outputDir + @"ConvertXbrlToXlsx_out.xlsx", saveOptions);

{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">To check out more code examples of Aspose.Finance for .NET, please visit the <a href="https://github.com/aspose-finance/Aspose.Finance-for-.NET/tree/master/CSharp">GitHub examples</a> page of the API. If you are looking to view and convert finance document formats on the fly using your mobile devices, please use our <a href="https://products.aspose.app/finance/family">Free Online Financial Document Processing Apps</a> today.</p>
{{< products/product-feature-blocks
featureheading="Platform Independent Financial Document Processing"
featuretext="Aspose.Finance for .NET offers unmatched cross-platform compatibility to end users and can run smoothly on different operating systems. It supports multiple frameworks, allowing developers to develop financial solutions without worrying about framework-related integration issues. The .NET API for financial documents processing does not require additional software installations, so you can continue developing feature-rich financial analysis and reporting solutions without any dependencies."
>}}
{{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
faqquery="1. How can I view, read, convert, and process financial documents in .NET?"
faqanswer="You can use Aspose.Finance for .NET API to seamlessly process financial document file formats on the .NET platform. Our API provides easy-to-use functions that help you create, read, import, and convert XBRL documents and process other finance-related file types such as iXBRL and OFX."
>}}
   {{< products/faq-block 
faqquery="2. How long it takes to process financial files using the API?"
faqanswer="Our API works fast and completes your XBRL and iXBRL reading, validating, and conversion requests in no time."
>}}
   {{< products/faq-block
faqquery="3. Are code examples available for developers to help learn about finance documents processing using the .NET API?"
faqanswer="Yes, we provide coding examples for developers to help them with the initial learning curve. These code samples are available on the GitHub examples page of the API and cover various use cases for the API users."
>}}
   {{< products/faq-block
faqquery="4. Is the API secure for sensitive documents and data?"
faqanswer="Yes, our API is secure for sensitive data. We ensure the safety and integrity of your data and take all necessary measures to protect your files processed using our products."
>}}
{{< products/faq-block
faqquery="5. Is Aspose.Finance for .NET compatible with different .NET frameworks?"
faqanswer="Absolutely! The .NET API for financial documents processing is compatible with multiple .NET frameworks and runs smoothly on various operating systems. It does not require additional software installations to process your financial reporting or data analysis files."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Finance Documents Manipulation Tools"
>}}
   {{< products/popularapp-anchor
 anchorlink="Read XBRL"
moreproducts="https://products.aspose.com/finance/net/view/xbrl/"
>}}
{{< products/popularapp-anchor
 anchorlink="Read iXBRL"
moreproducts="https://products.aspose.com/finance/net/view/ixbrl/"
>}}
   {{< products/popularapp-anchor
 anchorlink="Read OFX Request"
moreproducts="https://products.aspose.com/finance/net/view/ofx-request/"
>}}
{{< products/popularapp-anchor
 anchorlink="Read OFX Response"
moreproducts="https://products.aspose.com/finance/net/view/ofx-response/"
>}}
   {{< products/popularapp-anchor
 anchorlink="Convert XBRL to XLSX"
moreproducts="https://products.aspose.com/finance/net/conversion/xbrl-to-xlsx/"
>}}
{{< products/popularapp-anchor
 anchorlink="Convert XBRL to iXBRL"
moreproducts="https://products.aspose.com/finance/net/conversion/xbrl-to-ixbrl/"
>}}
   {{< products/popularapp-anchor
 anchorlink="Convert OFX Request"
moreproducts="https://products.aspose.com/finance/net/conversion/ofx-request/"
>}}
{{< products/popularapp-anchor
 anchorlink="Convert OFX Response"
moreproducts="https://products.aspose.com/finance/net/conversion/ofx-response/"
>}}
   {{< products/popularapp-anchor
 anchorlink="Validate XBRL"
moreproducts="https://products.aspose.com/finance/net/validate/xbrl/"
>}}
{{< products/popularapp-anchor
 anchorlink="Validate iXBRL"
moreproducts="https://products.aspose.com/finance/net/validate/ixbrl/"
>}}  
{{< /products/popularapp-home-wrapper >}}
{{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Looking for help?"
bartext="Checkout our support channels for help with your questions related to Aspose product API features and working."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/finance/net/"
 resourcetxt2="API Reference"
 resourcelinks2="https://reference.aspose.com/finance/net/"
 resourcetxt3="Knowledge Base"
 resourcelinks3="https://kb.aspose.com/finance/net/"
 resourcetxt4="Free Support"
 resourcelinks4="https://forum.aspose.com/c/finance/43"
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
 resourcelistlink="https://blog.aspose.com/finance/convert-xbrl-to-html-using-csharp/"
 resourcelistlink2="https://blog.aspose.com/finance/convert-xbrl-to-pdf-using-csharp/"
 resourcelistlink3="https://blog.aspose.com/finance/create-parse-ofx-request-or-response-programmatically-csharp-api/"
 resourcelisttext="Convert XBRL to HTML using C#"
 resourcelisttext2="Convert XBRL to PDF using C#"
 resourcelisttext3="Create OFX Request or Response in C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentation"
 resourcealt="Documentation"
 resourceimg="/images/docs1.svg"
 resourcelistlink="https://docs.aspose.com/finance/net/feature-list/"
 resourcelistlink2="https://docs.aspose.com/finance/net/installation/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Finance for .NET Features Overview"
 resourcelisttext2="Install Aspose.Finance for .NET"
 resourcelisttext3="Aspose.Finance for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Knowledge Base"
 resourcealt="Code Samples"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/finance/net/how-to-extract-data-from-xbrl-file-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/finance/net/how-to-extract-data-from-xbrl-file-in-c-sharp/#steps-to-extract-data-from-xbrl-file-in-c"
 resourcelistlink3="https://kb.aspose.com/finance/net/how-to-extract-data-from-xbrl-file-in-c-sharp/#code-to-extract-data-from-xbrl-file-in-c"
 resourcelisttext="How to Extract Data from XBRL Files in C#"
resourcelisttext2="Steps to Extract Data from XBRL Files in C#"
 resourcelisttext3="Code to Extract Data from XBRL Files in C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Ready to get started?"
rtstext="Download Free Trial"
rtslink="https://releases.aspose.com/finance/net/"
rtslink2="https://products.aspose.com"
rtstext2="View All APIs"
>}}

---
title: Reliable File Compression API for .NET to Archive, Encrypt Files
description: Powerful file compression API for .NET by Aspose. Efficiently compress and archive files & folders in ZIP, 7Zip, RAR, GZIP, and BZ2 formats, or encrypt archives.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="Reliable File Compression and Archiving API for .NET"
  inheadertext="Create archives of ZIP, 7ZIP, RAR, GZIP, TAR, LZ, BZ2, CAB, and more types with the Aspose file compression and archiving API for .NET. Seamlessly compress, decompress, and encrypt archives with AES and ZIPCrypto encryption"
  ctabtn="Download Free Trial"
  ctalink="https://releases.aspose.com/zip/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="View All APIs"
  bchomelink="/"
  bchome="Home"
  bcpage="ZIP"
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
subnav5="https://purchase.aspose.com/pricing/zip/net" 
subnavtxt5="Pricing" 
subbtn1="https://docs.aspose.com/zip/net/" 
subbtntxt1="Learn"
subbtn2="https://purchase.aspose.com/buy" 
subbtntxt2="Buy"
>}}
   {{< products/subtext-wrapper 
   sectionid="overview"
   subtitle="Master Compression and Archiving on The .NET Platform"
   subtext="Aspose.ZIP for .NET is a feature-rich, standalone file compression, decompression, archiving, and encryption API. Developers can use the .NET API to compress files and folders to create archives of ZIP, RAR, 7ZIP, TAR, GZIP, CAB, BZ2, CPIO, LZ, and more types. It allows developers to manipulate the archives and supports adding or removing files to and from existing archives and inserting files without compression into the archives. The .NET compression library also includes powerful security features and enables securing the archives with the help of custom passwords, ZIPCrypto, and EAS encryption (AES128, AES192, and AES256) standards."
   subtext2="The file compression API for .NET supports extracting archive entries and creating self-extracting archives as part of its comprehensive feature set. Users can build extensive .NET solutions targeting desktop and web interfaces that can run on multiple OS or platforms with Aspose.ZIP for .NET. It does not require installing additional software to function, and it helps developers independently master document compression and archiving within their .NET apps."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Getting Started</h2>
   <p>The information given below will help you correctly set up Aspose.ZIP for .NET at your end. Please check a list of prerequisites on the <a href="https://docs.aspose.com/zip/net/system-requirements/">System Requirements</a> page before you install the file compression API to ensure your system meets the recommended settings.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper 
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.ZIP for .NET Installation"
>}}
<p>Please download the DLLs or the MSI installer of the archive file manipulation library from the <a href="https://releases.aspose.com/zip/net/">downloads section</a> to install it. Alternatively, you can obtain the <a href="https://www.nuget.org/packages/Aspose.ZIP/">NuGet package</a> and set up the library from the Visual Studio Package Manager Console using the below-given command:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Zip
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Seamlessly Create ZIP Archives and Convert Them in .NET" featuretext="Aspose.ZIP for .NET helps developers programmatically create ZIP archives by compressing single or multiple files or folders. It enables developers to build reliable archiving solutions offering extensive features, including compression, extraction, and encryption of the archives. In addition to the advanced archive management capabilities, the .NET API for file compression also offers the ability to seamlessly convert archives from one format to another."
>}}
   
{{< products/product-feature-blocks-col
featurecolheading="Create ZIP Archives with Multiple Files in C#"
>}}
<p>ZIP archives are one of the most common archive types, used globally to compress files and folders. ZIP archives are popular among users of different OS and platforms, placing them in a select group of universally accepted compression and archiving formats. Developers can efficiently create ZIP archives by adding more than one file within their C# .NET apps. In this coding example, we will review how to compress files in C# .NET using the .NET ZIP API by <a href="https://blog.aspose.com/zip/create-zip-archives-add-files-or-folders-to-zip-in-csharp-asp.net/#c-zip-multiple-files-using-filestream">archiving multiple files</a>. Let's check out the following steps and information for more.</p>
<ul>
   <li>Create a <a href="https://reference.aspose.com/zip/net/aspose.zip.archive/createentry/methods/1">FileStream</a> class object for the output ZIP archive.</li>
   <li>Add the source files into FileStream objects.</li>
   <li>Create an <a href="https://reference.aspose.com/zip/net/aspose.zip/archive">Archive</a> class object.</li>
   <li>Add the source files into the archive using <a href="https://reference.aspose.com/zip/net/aspose.zip.archive/createentry/methods/1">Archive.CreateEntry(string, FileStream)</a> method.</li>
   <li>Use the <a href="https://reference.aspose.com/zip/net/aspose.zip/archive/save/">Archive.Save(FileStream)</a> method to create the ZIP archive.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Create FileStream for output ZIP archive
using (FileStream zipFile = File.Open("compressed_files.zip", FileMode.Create))
{
            	// File to be added to archive
            	using (FileStream source1 = File.Open("alice29.txt", FileMode.Open, FileAccess.Read))
            	{
                            	// File to be added to archive
                            	using (FileStream source2 = File.Open("asyoulike.txt", FileMode.Open, FileAccess.Read))
                            	{
                                            	using (var archive = new Archive())
                                            	{
                                                            	// Add files to the archive
                                                            	archive.CreateEntry("alice29.txt", source1);
                                                            	archive.CreateEntry("asyoulik3.txt", source2);
                                                            	// ZIP the files
                                                            	archive.Save(zipFile, new ArchiveSaveOptions() { Encoding = Encoding.ASCII, ArchiveComment = "two files are compressed in this archive" });
                                            	}
                            	}
            	}
}


{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="How to Effortlessly Convert Archives in .NET"
>}}
<p>Converting archives of different types from one format to another is supported by the .NET archive creating and extraction library. The following code example explains how developers can convert a RAR file to ZIP format within their .NET apps. Let’s review the steps involved in the <a href="https://blog.aspose.com/zip/convert-rar-files-to-zip-in-csharp/">conversion process</a>.</p>
<ul>
   <li>Create an <a href="https://reference.aspose.com/zip/net/aspose.zip/archive">Archive</a> class object for the ZIP archive.</li>
   <li>Using the <a href="https://reference.aspose.com/zip/net/aspose.zip.rar/rararchive">RarArchive</a> class, load the RAR archive.</li>
   <li>Use the <a href="https://reference.aspose.com/zip/net/aspose.zip.rar/rararchive/properties/entries">RarArchive.Entries</a> collection to loop through the entries of the RAR archive.</li>
   <li>For each entry in the RAR archive, extract the entry to the MemorySteam object using the <a href="https://reference.aspose.com/zip/net/aspose.zip.rar/rararchiveentry/methods/extract">RarArchive.Entries[int].Extract(MemoryStream)</a> method. And add the entry to the ZIP archive using <a href="https://reference.aspose.com/zip/net/aspose.zip.archive/createentry/methods/1">Archive.CreateEntry(String, MemoryStream)</a> method.</li>
   <li>Save the output ZIP archive using the <a href="https://reference.aspose.com/zip/net/aspose.zip/archive/methods/save">Archive.Save(String)</a> method.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Create an instance of Archive class for ZIP archive
using (Archive zip = new Archive())
{
	// Load the RAR archive
	using (RarArchive rar = new RarArchive(@"D:\archvie.rar"))
	{
    	// Loop through entries of RAR file
    	for (int i = 0; i < rar.Entries.Count; i++)
    	{
         	// Copy each entry from RAR to ZIP
         	if (!rar.Entries[i].IsDirectory)
         	{
             	var ms = new MemoryStream();
             	rar.Entries[i].Extract(ms);
             	ms.Seek(0, SeekOrigin.Begin);
                 zip.CreateEntry(rar.Entries[i].Name, ms);
         	}
         	else
                 zip.CreateEntry(rar.Entries[i].Name + "/", Stream.Null);
     	}
 	}
	// Save the resultant ZIP archive
	zip.Save("output.zip");
}


{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">You can view more working code examples at the <a href="https://github.com/aspose-zip/Aspose.ZIP-for-.NET/tree/master/Examples">GitHub examples</a> page of the Aspose.ZIP for .NET API. We provide <a href="https://products.aspose.app/zip/family/">Free Online Archiving and Encryption Apps</a> to help you open, merge, convert, zip, unzip, encrypt, and decrypt files on the fly using your mobile devices, so please feel free to check out the free apps.</p>
{{< products/product-feature-blocks
featureheading="Advanced Archive Extraction Functionality in .NET"
featuretext="Together with the unmatched compression and archiving capabilities of Aspose.ZIP for .NET, it boasts the ability to decompress and extract files from archives of different types, including ZIP, RAR, TAR, GZIP, 7ZIP, and more. Developers can use the high-performance archive file manipulation library for programmatically extracting the files compressed and added to the archives across multiple operating systems. The functionality of extracting archives also extends to password-protected files, allowing users to extract files from secure archive files in .NET."
>}}
{{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
faqquery="1. How can I convert archive files on the .NET platform?"
faqanswer="Converting archive files in .NET is quick and easy using the file compression API for .NET. It supports working with archives in C# .NET efficiently and converting them to and from different formats. You can convert RAR to ZIP, ZIP to TAR, ZIP to 7ZIP, and more."
>}}
   {{< products/faq-block 
faqquery="2. How long it takes to compress and archive files?"
faqanswer="The .NET archiving library works fast and completes your archive file creation, manipulation, protection, and extraction requests in no time."
>}}
   {{< products/faq-block
faqquery="3. Is it safe to compress and archive files using the .NET API?"
faqanswer="You can be sure of the security of your data files while processing them using the .NET archive API. We ensure the privacy of your data and take all required measures to provide you with a secure user experience."
>}}
   {{< products/faq-block
faqquery="4. Can I process archives on Mac OS, Windows, or Linux?"
faqanswer="Yes, the library works across different OS, frameworks, and operating environments. You can use it on the platform of your choice, and it does not require any additional software installation to function."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Archive Manipulation Tools"
>}}
   {{< products/popularapp-anchor
 anchorlink="Compress HTML to ZIP Archive"
moreproducts="https://products.aspose.com/zip/net/compress/html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Compress PDF to ZIP Archive"
moreproducts="https://products.aspose.com/zip/net/compress/pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Compress PPTX to ZIP Archive"
moreproducts="https://products.aspose.com/zip/net/compress/pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Compress XLSX to ZIP Archive"
moreproducts="https://products.aspose.com/zip/net/compress/xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Compress DOCX to ZIP Archive"
moreproducts="https://products.aspose.com/zip/net/compress/docx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Compress JPEG to ZIP Archive"
moreproducts="https://products.aspose.com/zip/net/compress/jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Merge RAR to ZIP Archive"
moreproducts="https://products.aspose.com/zip/net/merger/rar-to-zip"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Merge RAR to 7ZIP Archive"
moreproducts="https://products.aspose.com/zip/net/merger/rar-to-7zip"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Merge RAR to TAR Archive"
moreproducts="https://products.aspose.com/zip/net/merger/rar-to-tar"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Merge ZIP to 7ZIP Archive"
moreproducts="https://products.aspose.com/zip/net/merger/zip-to-7zip/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Merge ZIP to TAR Archive"
moreproducts="https://products.aspose.com/zip/net/merger/zip-to-tar"
>}}  
   {{< products/popularapp-anchor
 anchorlink="Merge ZIP to CPIO Archive"
moreproducts="https://products.aspose.com/zip/net/merger/zip-to-cpio"
>}}  
   
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Looking for help?"
bartext="Checkout our support channels for help with your questions related to Aspose product API features and working."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/zip/net/"
 resourcetxt2="API Reference"
 resourcelinks2="https://reference.aspose.com/zip/net/"
 resourcetxt3="Knowledge Base"
 resourcelinks3="https://kb.aspose.com/zip/net/"
 resourcetxt4="Free Support"
 resourcelinks4="https://forum.aspose.com/c/zip/37"
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
 resourcelistlink="https://blog.aspose.com/zip/extract-zip-archives-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/zip/create-7zip-archives-programmatically-using-csharp-asp.net/"
 resourcelistlink3="https://blog.aspose.com/zip/create-and-extract-gzip-archives-using-csharp/"
 resourcelisttext="Extract ZIP Archives Programmatically in C#"
 resourcelisttext2="Create 7z (7-Zip) Archives using C#"
 resourcelisttext3="Compress and Extract Files with GZip in C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentation"
 resourcealt="Documentation"
 resourceimg="/images/docs1.svg"
 resourcelistlink="https://docs.aspose.com/zip/net/features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.ZIP/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.ZIP for .NET Features"
 resourcelisttext2="Install Aspose.ZIP for .NET NuGet Package"
 resourcelisttext3="Aspose.ZIP for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Knowledge Base"
 resourcealt="Code Samples"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/zip/net/how-to-create-zip-file-in-memory-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/zip/net/how-to-password-protect-a-zip-file-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/zip/net/how-to-create-self-extracting-zip-using-csharp/"
 resourcelisttext="How to Create ZIP File in Memory in C#"
resourcelisttext2="How to Password Protect a ZIP File in C#"
 resourcelisttext3="How to Create Self Extracting ZIP in C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Ready to get started?"
rtstext="Download Free Trial"
rtslink="https://releases.aspose.com/zip/net/"
rtslink2="https://products.aspose.com"
rtstext2="View All APIs"
>}}

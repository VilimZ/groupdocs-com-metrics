---
title: 用于读取、识别和生成条形码的 .NET Barcode API
description: 使用 C# .NET Barcode API 读取、识别和生成一维和二维条形码。在 ASP.NET 和 VB.NET 中创建 QR 码生成器或扫描仪应用程序。
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="用于读取、识别和生成条形码和 QR 码的 .NET Barcode API"
  inheadertext="在 .NET 中以无与伦比的精度生成条形码，并使用 C# .NET 条形码 API 扫描、读取和识别不同符号体系的线性、二维和邮政条形码。它支持扫描和检测JPG、PNG、GIF、BMP和TIFF格式的条形码和二维码。"
  ctabtn="下载免费试用版"
  ctabtn="下载免费试用版"
  ctalink="https://releases.aspose.com/barcode/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="查看所有API"
  bchomelink="/"
  bchome="家"
  bcpage="条码"
  bclink2="产品"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="概述" 
subnav2="#features"
subnavtxt2="特征" 
subnav3="#support"
subnavtxt3="支持" 
subnav4="#examples"
subnavtxt4="例子" 
subnav5="https://purchase.aspose.com/pricing/barcode/net"
subnavtxt5="价钱" 
subbtn1="https://docs.aspose.com/barcode/net/"
subbtntxt1="学习"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="买"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="在 C# .NET 中构建条形码识别和 QR 代码生成器应用程序"
   subtext="Aspose.BarCode for .NET 是一种高性能条形码生成和识别 API，使 .NET 开发人员能够创建、扫描、读取、检测和导出不同类型的一维（线性）、二维和邮政条形码。该 .NET 条形码生成器 API 拥有强大的功能集，在读取或扫描 PNG、BMP、JPG、GIF、TIFF 和其他格式的条形码图像时提供完美的准确性。此外，您还可以将条形码导出到流行的光栅图像或 EMF 和 SVG 矢量文件。与条形码和 QR 码扫描功能一起，Aspose.BarCode for .NET 允许您操纵条形码外观的多个元素，包括图像质量、文件大小、背景和条形颜色、图像质量和分辨率、旋转角度、标题等。更多的。"
   subtext2="使用适用于 .NET 的条形码 API，您可以快速轻松地将 QR 码扫描仪功能集成到现有的 .NET 条形码处理解决方案中，或者从头开始使用 C#、ASP.NET 或 VB.NET 构建全面的条形码识别应用程序。 Aspose.BarCode for .NET 库支持超过 50 种线性、二维和邮政条形码符号，例如 Code 128、Code 39 Extended、Data Matrix、QR Code、PDF 417 和 Postnet。"
   >}} 
   {{< products/product-text-blocks >}}
   <h2>入门</h2>
   <p>在您端设置 .NET 条形码 API 之前，请检查<a href="https://docs.aspose.com/barcode/net/system-requirements/">系统要求</a>页面上的先决条件确保顺利的 API 设置和用户体验。</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples">}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.BarCode for .NET 安装"
>}}
<p>请访问<a href="https://releases.aspose.com/barcode/net/">下载部分</a>直接下载.NET条形码识别和生成API的DLL或MSI安装程序。您也可以使用 <a href="https://www.nuget.org/packages/Aspose.BarCode/">NuGet 包</a> 安装 API。请在下面找到包管理器控制台的命令：</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.BarCode 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="如何在 .NET 中生成 QR 码并从图像中读取条形码"
featuretext="借助 Aspose.BarCode for .NET，开发人员可以将 QR 代码生成功能合并到他们的 .NET 条形码处理应用程序中。此外，还可以从 PNG、JPEG、BMP 和其他图像中识别不同类型的条形码。您可以扫描并读取同一图像文件中的多种条形码类型。" 
>}}  
{{< products/product-feature-blocks-col
featurecolheading="在.NET中快速生成二维码"
>}}
<p>.NET条形码API支持生成不同编码类型的QR码。您可以将此功能添加到您的条形码操作应用程序中，并进一步增强您的产品。请检查以下信息和 C# 编码，以使用 Aspose.BarCode for .NET 库快速轻松地生成 QR 码：</p>
<ul>
   <li>实例化 <a href="https://reference.aspose.com/barcode/net/aspose.barcode.generation/barcodegenerator/">BarcodeGenerator</a> 类并指定 <a href="https://reference.aspose.com/barcode/net/aspose.barcode.Generation/encodetypes">EncodeType</a> 和输入文本。</li>
   <li>设置二维码版本和编码类型。</li>
   <li>生成并保存 PNG 格式的 QR 码图像。</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Initialize an instance of BarcodeGenerator class
BarcodeGenerator gen = new BarcodeGenerator(EncodeTypes.QR, "Aspose");
gen.Parameters.Barcode.XDimension.Pixels = 4;
// Set Auto version
gen.Parameters.Barcode.QR.QrVersion = QRVersion.Auto;
//Set ForceMicroQR QR encode type
gen.Parameters.Barcode.QR.QrEncodeType = QREncodeType.ForceMicroQR;
gen.Save(dataDir + "QREncodeTypeForceMicroQR.png", BarCodeImageFormat.Png);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="从 .NET 中的图像读取条形码"
>}}
<p>Aspose.BarCode for .NET API 使得从 PNG、JPEG、BMP、GIF 和其他图像文件格式读取不同符号的条形码变得更加容易。此 .NET 条形码识别和生成 API 支持扫描和读取 <a href="https://blog.aspose.com/barcode/read-barcode-from-image-in-csharp/#Read-Barcode-of-Multiple- Types-from-Image-in-CSharp">来自同一图像的多个条形码</a>。请检查以下信息以获得更多帮助：</p>
<ul>
   <li>使用 <a href="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcodereader/">BarCodeReader</a> 类加载源条形码图像。</li>
   <li>调用 <a href="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcodereader/readbarcodes/">ReadBarCodes()</a> 方法即可获取 <a href 中的识别结果="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcoderesult/">BarCodeResult</a> 类对象。</li>
   <li>循环获得的结果并显示条形码的类型和文本。</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Initialize barcode reader
BarCodeReader reader = new BarCodeReader("C:\\Files\\BarCode\\Sample.png");
// Read the barcode and show the results
foreach(BarCodeResult result in reader.ReadBarCodes()) 
{
    Console.Out.WriteLine("CodeText: " + result.CodeText);
    Console.Out.WriteLine("Symbology type: " + result.CodeType);
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">请访问 <a href="https://github.com/aspose-barcode/Aspose.BarCode-for-.NET/tree/master/Examples">GitHub 示例</a>页面，了解 . NET 条形码 API。如果您希望使用移动设备即时扫描、识别和生成一维、二维和邮政条形码或 QR 码，请查看 <a href="https://products.aspose.app/barcode/family ">Aspose.BarCode 的免费在线应用程序</a>。</p>
{{< products/product-feature-blocks
featureheading="轻松集成和高级操作"
featuretext="Aspose.BarCode for .NET 允许超级简单的操作，只需要几行 .NET 编码即可开始生成、读取和识别不同类型的条形码。作为 .NET 开发人员，您可以轻松地将 .NET 条形码生成器 API 与任何 .NET 应用程序集成。该库的最佳功能之一是能够使用复杂的算法和过滤机制读取损坏的条形码和 QR 码，使您能够满足条形码处理需求。"
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="常问问题"
   >}}
   {{< products/faq-block
   faqquery="1. 如何在.NET中生成条形码？"
   faqanswer="使用 Aspose.BarCode for .NET API 在 .NET 中生成一维、二维和邮政条形码既快速又简单。只需几行 .NET 编码即可生成所需类型的条形码。" 
   >}}
   {{< products/faq-block
   faqquery="2. 读取或生成条码需要多长时间？"
   faqanswer=".NET 条形码识别和生成 API 运行速度快，可立即完成您的请求。" 
   >}}
   {{< products/faq-block
   faqquery="3. 使用.NET API 处理文件安全吗？"
   faqanswer="使用 Aspose.BarCode for .NET API 处理条形码文件时，您可以确保条形码文件的安全性。我们确保您的数据隐私，并采取一切必要措施为您提供安全的用户体验。" 
   >}}
   {{< products/faq-block
   faqquery="4. 我可以在 Mac OS、Windows 或 Linux 上识别并生成条形码吗？"
   faqanswer="是的，.NET 条形码 API 可跨不同操作系统、框架和操作环境工作。您可以在您选择的平台上使用它，并且不需要安装任何其他软件即可运行。" 
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="条形码生成和识别工具"
   >}}
   {{< products/popularapp-anchor
anchorlink="生成 PDF417 条码"
moreproducts="https://products.aspose.com/barcode/net/generate/pdf417/"
>}} 
   {{< products/popularapp-anchor
anchorlink="生成 CODE39 条形码"
moreproducts="https://products.aspose.com/barcode/net/generate/code39/"
>}} 
   {{< products/popularapp-anchor
anchorlink="生成 CODE128 条码"
moreproducts="https://products.aspose.com/barcode/net/generate/code128/"
>}} 
   {{< products/popularapp-anchor
anchorlink="生成二维码"
moreproducts="https://products.aspose.com/barcode/net/generate/qr/"
>}} 
   {{< products/popularapp-anchor
anchorlink="生成 POSTNET 条形码"
moreproducts="https://products.aspose.com/barcode/net/generate/postnet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="生成 PLANET 条形码"
moreproducts="https://products.aspose.com/total/python-net/generate-barcode/planet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="识别 CODE39 条形码"
moreproducts="https://products.aspose.com/barcode/net/recognize/code39/"
>}} 
   {{< products/popularapp-anchor
anchorlink="识别二维码"
moreproducts="https://products.aspose.com/barcode/net/recognize/qr/"
>}} 
   {{< products/popularapp-anchor
anchorlink="识别PDF417条码"
moreproducts="https://products.aspose.com/barcode/net/recognize/pdf417/"
>}} 
   {{< products/popularapp-anchor
anchorlink="识别 POSTNET 条形码"
moreproducts="https://products.aspose.com/barcode/net/recognize/postnet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="识别 AZTEC 条形码"
moreproducts="https://products.aspose.com/barcode/net/recognize/aztec/"
>}}  
   {{< products/popularapp-anchor
anchorlink="识别 ISBN 条形码"
moreproducts="https://products.aspose.com/barcode/net/recognize/isbn/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="寻求帮助？"
bartext="查看我们的支持渠道，以帮助解决与 Aspose 产品 API 功能和工作相关的问题。"
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/barcode/net/"
resourcetxt2="API参考"
resourcelinks2="https://reference.aspose.com/barcode/" 
resourcetxt3="知识库"
resourcelinks3="https://kb.aspose.com/barcode/net/"
resourcetxt4="免费支持"
resourcelinks4="https://forum.aspose.com/c/barcode/13"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
resource-heading="资源"
sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://blog.aspose.com/"
resourcetitle="博客"
resourcealt="博客"
resourceimg="/images/blog1.svg"
resourcelistlink="https://blog.aspose.com/barcode/generate-dotcode-barcodes/"
resourcelistlink2="https://blog.aspose.com/barcode/generate-hibc-lic-barcodes/"
resourcelistlink3="https://blog.aspose.com/barcode/read-barcode-from-multipage-tiff-in-csharp/"
resourcelisttext="在 C# 中生成 DotCode 条形码"
resourcelisttext2="在 C# 中生成 HIBC LIC 条形码"
resourcelisttext3="在 C# 中从多页 TIFF 图像读取条形码" 
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="文档"
resourcealt="文档"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/barcode/net/product-features/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.BarCode/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.BarCode for .NET 功能"
resourcelisttext2="安装 Aspose.BarCode for .NET NuGet 包"
resourcelisttext3="Aspose.BarCode for .NET 付费支持服务台" 
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="知识库"
resourcealt="代码示例"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/barcode/net/how-to-rotate-barcode-image-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/barcode/net/how-to-generate-barcode-image-in-csharp/"
resourcelistlink3="https://kb.aspose.com/barcode/net/how-to-convert-barcode-to-svg-in-csharp/"
resourcelisttext="如何在 C# 中旋转条形码图像"
resourcelisttext2="如何在 C# 中生成条形码图像"
resourcelisttext3="如何在 C# 中将条形码转换为 SVG" 
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper 
rtsheading="准备好开始了吗？" 
rtstext="下载免费试用版" 
rtslink="https://releases.aspose.com/" 
rtslink2="https://products.aspose.com" 
rtstext2="查看所有API" 
>}}

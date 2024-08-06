---
title: 用于创建、编辑和处理图表的 .NET Visio 图 API
description: C# .NET Visio 图 API，用于创建、编辑和处理 VSD、VSX、VTX、VSDX 和其他 Visio 文件。将图表转换为 PDF、PNG 和 HTML 格式。
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="用于创建、编辑、导出和流程图的 .NET Visio 图 API"
  inheadertext="终极 .NET 图表 API，可使用基于 C#、ASP.NET 和 VB.NET 的 Visio 图表文件完美地生成、操作和转换 Microsoft Visio 文件格式，例如 VSD、VDX、VSX、VSX、VSSX、VTX 和 VTSX处理应用程序。"
  ctabtn="下载免费试用版"
  ctabtn="下载免费试用版"
  ctalink="https://releases.aspose.com/diagram/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="查看所有API"
  bchomelink="/"
  bchome="家"
  bcpage="图表"
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
subnav5="https://purchase.aspose.com/pricing/diagram/net"
subnavtxt5="价钱" 
subbtn1="https://docs.aspose.com/diagram/net/"
subbtntxt1="学习"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="买"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="用于处理 Microsoft Visio 图表的全功能 .NET API"
   subtext="Aspose.Diagram for .NET 是一个灵活且全面的 Visio 图表 API，允许软件和应用程序开发人员跨 C#、ASP.NET 和 VB.NET 创建功能强大的 Visio 文件处理应用程序。借助此本机 .NET 图表 API，您可以构建移动应用程序、桌面解决方案和用于 Web 界面的工具，以创建、修改、转换和导出 Microsoft Visio 图表。 Aspose.Diagram for .NET 库支持流行的 Visio 文件格式，例如 VSD、VSDX、VTX、VDX、VSX、VSSX、VTSX、VSDM 和 VSSM。您可以使用此 .NET Visio 图表 API 快速轻松地开发复杂的图表转换解决方案，并将 Visio 文件转换为 PDF、JPG、PNG、BMP、HTML、XPS、SVG 和 EMF 文件格式。"
   subtext2="在许多先进的 Visio 文件处理功能中，Aspose.Diagram for .NET 可以旋转形状、检索有关连接器和字体的信息、对形状进行分组、将图像注入到绘图中、向 Visio 绘图中添加新页面等等。此外，您还可以在 Visio 页面上绘制矩形、折线、贝塞尔曲线和许多其他形状。"
   >}} 
   {{< products/product-text-blocks >}}
   <h2>入门</h2>
   <p>在设置 .NET 图表 API 以获得优化安装之前，请检查<a href="https://docs.aspose.com/diagram/net/system-requirements/">系统要求</a>页面上的先决条件以及API使用经验。</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading=".NET 安装的 Aspose.Diagram"
>}}
<p>要安装 Aspose.Diagram for .NET API，您可以从<a href="https://releases.aspose.com/diagram/net/">下载部分</a>下载 DLL 或 MSI 安装程序。或者，您可以使用 <a href="https://www.nuget.org/packages/Aspose.Diagram/">NuGet 包</a> 设置适用于 .NET 的 Visio 图表 API。包管理器控制台的命令如下：</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Diagram 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="如何在 .NET 中从头开始创建 Visio 图表并将 Visio 转换为 PDF"
featuretext="开发人员可以使用 Aspose.Diagram for .NET 库以编程方式从头开始创建 MS Visio 图表。您可以轻松插入新页面和形状，或在您创建的图表文件中操作不同的形状属性。 .NET 图表 API 还支持将 VSD 和 VSDX Visio 图表格式独立地以高保真度转换为 PDF 文件。"
>}}
{{< products/product-feature-blocks-col
featurecolheading="在 .NET 中从头开始创建 Visio 图表"
>}}
<p>Aspose.Diagram for .NET API 是一个完整的图表操作解决方案，使开发人员能够创建加载了所有基本元素（例如形状、流程图、注释等）的 Visio 图表。您可以使用 .NET 图表 API 借助以下给出的步骤和信息从头开始创建 Visio 文档：</p>
<ul>
   <li>检查保存文件的目录是否存在。</li>
   <li>如果目录不存在则创建一个。</li>
   <li>初始化 <a href="https://reference.aspose.com/diagram/net/aspose.diagram/diagram">Diagram</a> 类的对象。</li>
   <li>使用 <a href="https://reference.aspose.com/diagram/net/aspose.diagram.diagram/save/methods/2">Diagram.Save(String fileName, SaveFileFormat.VSDX)< 将图表保存为 VSDX /a> 方法。</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// The path to the documents directory.
string dataDir = RunExamples.GetDataDir_Diagrams();
// Create a directory if it is not already present.
bool IsExists = System.IO.Directory.Exists(dataDir);
if (!IsExists)
    System.IO.Directory.CreateDirectory(dataDir);
// Initialize a new Visio
Diagram diagram = new Diagram();
dataDir = dataDir + "CreateDiagram_out.vsdx";
// Save in the VSDX format
diagram.Save(dataDir, SaveFileFormat.VSDX);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="在 .NET 中将 MS Visio 图表转换为 PDF"
>}}
<p>将文件转换为 PDF 格式可以更轻松地在多个设备上共享和访问它们。 Aspose.Diagram for .NET API 允许在 C# .NET 应用程序中将 Visio 图表转换为 PDF 格式。您可以以编程方式将 VSD 或 VSDX 转换为 PDF，并具有高转换质量。以下步骤和信息将帮助您实现这一目标：</p>
<ul>
   <li>初始化 <a href="https://apireference.aspose.com/diagram/net/aspose.diagram">Diagram</a> 类对象以加载要转换的输入 Visio 文件。</li>
   <li>实例化 <a href="https://reference.aspose.com/diagram/net/aspose.diagram.saving/pdfsaveoptions/">PdfSaveOptions</a> 类对象。</li>
   <li>设置文件属性，例如页数和页索引。</li>
   <li>将输出文件另存为 PDF。</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Load Visio diagram
Aspose.Diagram.Diagram diagram = new Aspose.Diagram.Diagram("Sample.vsd");
// Declare PdfSaveOptions object
Aspose.Diagram.Saving.PdfSaveOptions saveOptions = new Aspose.Diagram.Saving.PdfSaveOptions();
// Number of pages to render
saveOptions.PageCount = 2;
// Set first page index
saveOptions.PageIndex = 1;
// Save Visio diagram to PDF
diagram.Save("PDF_out.pdf", saveOptions);
Console.WriteLine("Done");
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">更多 Aspose.Diagram for .NET API 的工作示例可在 <a href="https://github.com/aspose-diagram/Aspose.Diagram-for-.NET/tree/master/Examples">GitHub Examples 上找到</a> 页面。我们提供 Aspose.Diagram <a href="https://products.aspose.app/diagram/family/">免费在线应用</a>，用于编辑、查看、转换、合并、加水印、拆分和压缩 Microsoft使用移动或桌面设备即时生成 Visio 图表文件。请随时尝试使用在线应用程序从任何地方操作 Visio 图表。</p>
{{< products/product-feature-blocks
featureheading="独立操作和打印 Visio 文件"
featuretext="Aspose.Diagram for .NET API 允许访问和读取 Microsoft Visio 文件中的数据、对其进行处理，并使用最少的编码以多种打印选项高质量打印处理后的文件。使用 Aspose.Diagram for .NET 处理 Visio 图表文件时，无需安装 Microsoft Office 或 Microsoft Visio，为您提供独立的用户体验。"
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="常问问题"
   >}}
   {{< products/faq-block
   faqquery="1. 如何在.NET 中转换 Microsoft Visio 图表？"
   faqanswer="使用 Aspose.Diagram for .NET API 可以快速轻松地在 .NET 中转换 Visio 图表。只需几行 .NET 编码即可将 VSD、VSDX、VSX、VTX、VDX、VSDM 和其他图表文件转换为不同的文件格式。"
   >}}
   {{< products/faq-block
   faqquery="2. 转换或处理 Visio 图表需要多长时间？"
   faqanswer=".NET 图表 API 运行速度快，可立即完成您的图表转换请求。"
   >}}
   {{< products/faq-block
   faqquery="3. 使用.NET API 处理Visio 图表是否安全？"
   faqanswer="使用 Aspose.Diagram for .NET API 处理图表文件时，您可以确保图表文件的安全性。我们确保您的数据隐私，并采取一切必要措施为您提供安全的用户体验。"
   >}}
   {{< products/faq-block
   faqquery="4. 我可以在 Mac OS、Windows 或 Linux 上处理 MS Visio 图表吗？"
   faqanswer="是的，.NET 的图表 API 可跨不同的操作系统、框架和操作环境工作。您可以在您选择的平台上使用它，并且不需要安装任何其他软件即可运行。"
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Visio 图表操作工具"
>}}
   {{< products/popularapp-anchor
anchorlink="VSD 至 VSSX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-vssx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX 到 VSTM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-vstm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX 至 VSDX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-vsdx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM 到 VSSM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-vssm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD 转 TIFF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-tiff/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX 转 BMP"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-bmp/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM 转 JPEG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX 转 PNG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-png/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD 转 PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX 转 PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSX 转 PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsx-to-pdf/"
>}}  
   {{< products/popularapp-anchor
anchorlink="VSTM 转 PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vstm-to-pdf/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="寻求帮助？"
bartext="查看我们的支持渠道，以帮助解决与 Aspose 产品 API 功能和工作相关的问题。"
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/diagram/net/"
resourcetxt2="API参考"
resourcelinks2="https://reference.aspose.com/diagram/" 
resourcetxt3="知识库"
resourcelinks3="https://kb.aspose.com/diagram/net/"
resourcetxt4="免费支持"
resourcelinks4="https://forum.aspose.com/c/diagram/17"
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
resourcelistlink="https://blog.aspose.com/diagram/convert-image-to-visio-in-csharp/"
resourcelistlink2="https://blog.aspose.com/diagram/create-org-chart-csharp/"
resourcelistlink3="https://blog.aspose.com/diagram/find-replace-visio-text-csharp/"
resourcelisttext="在 C# 中将图像转换为 Visio"
resourcelisttext2="在 C# 中以编程方式创建 ORG 图表"
resourcelisttext3="在 C# 中查找和替换 Visio 文件中的文本"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="文档"
resourcealt="文档"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/diagram/net/feature-list/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Diagram/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Diagram for .NET 功能"
resourcelisttext2="安装 Aspose.Diagram for .NET NuGet 包"
resourcelisttext3="Aspose.Diagram for .NET 付费支持服务台"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="知识库"
resourcealt="代码示例"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/diagram/net/how-to-add-comment-to-visio-drawings-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/diagram/net/how-to-merge-visio-files-in-csharp/"
resourcelistlink3="https://kb.aspose.com/diagram/net/how-to-convert-vsx-to-html-in-c-sharp/"
resourcelisttext="如何在 C# 中向 Visio 绘图添加注释"
resourcelisttext2="如何在 C# 中合并 Visio 文件"
resourcelisttext3="如何在 C# 中将 VSX 转换为 HTML"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="准备好开始了吗？"
rtstext="下载免费试用版"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="查看所有API"
>}}

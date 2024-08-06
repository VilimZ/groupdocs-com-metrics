---
title: 用于管理和处理 Microsoft Project 文件的 .NET API
description: 用于处理 Microsoft Project 文件的可靠 .NET 项目管理 API。在 .NET 应用程序中生成、转换和操作 MPP、MPT 和 MPX 项目文件。
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="用于管理和处理 Microsoft Project 文件的 C# .NET API"
  inheadertext="在 C# .NET 项目管理应用程序中无缝创建、编辑、导出和处理 Microsoft Project 文件格式，例如 MPP、MPT、MPX 和 XML。使用 .NET Project 文件处理 API 将 MS Project 文档转换为 PDF、Excel、Primavera、HTML、TXT、PNG、JPEG 和 SVG 格式。"
  ctabtn="下载免费试用版"
  ctabtn="下载免费试用版"
  ctalink="https://releases.aspose.com/tasks/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="查看所有API"
  bchomelink="/"
  bchome="家"
  bcpage="任务"
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
subnav5="https://purchase.aspose.com/pricing/tasks/net"
subnavtxt5="价钱" 
subbtn1="https://docs.aspose.com/tasks/net/"
subbtntxt1="学习"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="买"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="用于处理 .NET 中的 MS Project 文件的领先项目管理 API"
   subtext="Aspose.Tasks for .NET 是一个强大的 API，用于处理不同的 Microsoft Project 文件格式。它使 .NET 开发人员能够以编程方式读取、修改、转换项目文件并将其导出为多种格式。使用此 Microsoft Project 文件的 .NET API，您可以智能地操作项目管理数据并处理各种资源。 Aspose.Tasks for .NET 是一个完整的项目资源管理解决方案，允许使用受密码保护的项目文档、排序和解锁 Microsoft Project 文件、资源规划和跟踪、操作任务以及管理成本和里程碑。"
   subtext2="您还可以在导出和打印项目文件时添加自定义甘特图，同时借助 C# .NET 项目管理 API，该 API 支持将项目文件准确转换为 PDF、Primavera、Excel 电子表格、文本、HTML、JPEG、BMP 和 PNG光栅图像和 SVG 矢量。"
   >}} 
   {{< products/product-text-blocks >}}
   <h2>入门</h2>
   <p>请参阅以下信息来设置 Aspose.Tasks for .NET 库。在安装 .NET 项目管理 API 之前，请检查<a href="https://docs.aspose.com/tasks/net/system-requirements/">系统要求</a>页面以获取先决条件列表。</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="用于 .NET 安装的 Aspose.Tasks"
>}}
<p>要直接下载 DLL 或 MSI 安装程序，请访问<a href="https://releases.aspose.com/tasks/net/">下载部分</a>。您还可以使用 <a href="https://www.nuget.org/packages/Aspose.Tasks/">NuGet 包</a> 安装 .NET API 以处理 Microsoft Project 文件。下面分享了用于 API 设置的包管理器控制台命令：</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM > Install-Package Aspose.Tasks
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
 featureheading="如何轻松地将 MPP 项目文件转换为 PDF 和光栅图像文件格式"
 featuretext="Aspose.Tasks for .NET 库允许快速轻松地处理项目管理文件，并让您将项目文件转换为众所周知的文档和图像文件格式，例如 PDF、Primavera、Excel、Text、HTML、PNG、SVG、JPEG、和位图。"
>}}
{{< products/product-feature-blocks-col
featurecolheading="在.NET 中将 MPP 转换为 PDF"
>}}
<p>在 .NET 文件转换应用程序中熟练地将项目文件转换为 PDF 格式。 Aspose.Tasks for .NET 库只需几行 .NET 编码即可将 MPP 文件转换为 PDF。请检查下面给出的说明和示例代码，以使用 .NET API 将 MPP 文档转换为 PDF 文件格式以处理 Microsoft Project 文件：</p>
<ul>
   <li>使用 <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">Project 类加载要转换的 MPP 文件。</a></li>
   <li>添加对 MPP 文件的更改（可选）。</li>
   <li>将 MPP 文件转换为 PDF 格式并使用 <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project/methods/save/index">Save</a> 方法将其导出。</li>
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
featurecolheading="将项目文件转换为图像"
>}}
<p>使用 Aspose.Tasks for .NET API 可以轻松将项目数据转换为 PNG 或 JPEG 图像。它需要最少的编码，并能够将数据导出为图像格式，从而可以跨多个设备方便地存储和访问。以下信息和代码片段将帮助您使用 .NET 项目管理 API 将 Microsoft Project 数据转换为 JPEG 图像：</p>
<ul>
   <li>使用 <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">Project</a> 类加载项目 MPP 文件。</li>
   <li>使用 <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions">ImageSaveOptions</a> 类的实例 savefileformat SaveFileFormat.JPEG</a> 枚举。</li>
   <li>使用 <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions/properties/jpegquality">JpegQuality</a> 属性指定 JPEG 图像质量。允许的值范围为 0 到 100。</li>
   <li>使用 <a href="https://reference.aspose.com/tasks/net/aspose.tasks.project/save/methods/6">Save</a> 方法转换并保存 JPEG 图像。</li>
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
   <p class="col-lg-12">请访问 Aspose.Tasks for .NET 的 <a href="https://github.com/aspose-tasks/Aspose.Tasks-for-.NET/tree/master/Examples">GitHub 示例</a>页面用于查看更多代码示例和工作示例的 API。您可以使用桌面或移动设备使用<a href="https://products.aspose.app/tasks/family">免费在线</a>项目管理数据处理应用程序查看、转换和操作 Microsoft Project 文件。</p>
{{< products/product-feature-blocks
 featureheading="在 C# .NET 文件合并应用程序中合并 Microsoft Project 文件"
 featuretext="Aspose.Tasks for .NET 可以轻松地合并不同的文件。 .NET 项目管理 API 支持以编程方式将 MPP、MPX、MPT 和 JIRA 文件与 PDF、Primavera 和其他文件格式组合。此外，您不需要安装 Microsoft Project 或 Microsoft Office 即可在 C# .NET 文档处理应用程序中操作项目文件。"
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="常问问题"
>}}
   {{< products/faq-block
 faqquery="1. 如何转换.NET 中的项目文件？"
 faqanswer="使用 Aspose.Tasks for .NET API 可以快速轻松地在 .NET 中转换 Microsoft Project 文件。只需几行 .NET 编码即可将 MPP、MPX、MPT、XML 和其他项目文件转换为不同的文档和图像文件格式。"
>}}
   {{< products/faq-block 
 faqquery="2. 转换或合并项目管理文件需要多长时间？"
 faqanswer="用于管理和处理 Microsoft Project 文件的 .NET API 运行速度快，可立即完成您的合并或转换文件请求。"
>}}
   {{< products/faq-block
 faqquery="3. 使用.NET API 处理项目管理数据是否安全？"
 faqanswer="使用 Aspose.Tasks for .NET API 处理项目数据文件时，您可以确保项目数据文件的安全性。我们确保您的数据隐私，并采取一切必要措施为您提供安全的用户体验。"
>}}
   {{< products/faq-block
 faqquery="4. 我可以在 Mac OS、Windows 或 Linux 上处理项目文件吗？"
 faqanswer="是的，.NET 的项目文件处理 API 可跨不同操作系统、框架和操作环境工作。您可以在您选择的平台上使用它，并且不需要安装任何其他软件即可运行。"
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="项目管理文件操作工具"
>}}
   {{< products/popularapp-anchor
 anchorlink="MPP 转 PDF"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP 至 XLSX"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP 到 HTML"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP 转 JPEG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP 转 PNG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP 转 BMP"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPT 至 XLSX"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpt-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPT 转 JPEG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpt-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JIRA 转 MPP"
 moreproducts="https://products.aspose.com/tasks/net/merger/jira-to-mpp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="XML 到 MPP"
 moreproducts="https://products.aspose.com/tasks/net/merger/xml-to-mpp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPX 转 PDF"
 moreproducts="https://products.aspose.com/tasks/net/merger/mpx-to-pdf/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="寻求帮助？"
bartext="查看我们的支持渠道，以帮助解决与 Aspose 产品 API 功能和工作相关的问题。"
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/tasks/net/"
resourcetxt2="API参考"
resourcelinks2="https://reference.aspose.com/tasks/"
resourcetxt3="知识库"
resourcelinks3="https://kb.aspose.com/tasks/net/"
resourcetxt4="免费支持"
resourcelinks4="https://forum.aspose.com/c/tasks/15"
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
resourcelistlink="https://blog.aspose.com/tasks/convert-mpp-to-mpx-in-csharp/"
resourcelistlink2="https://blog.aspose.com/tasks/convert-ms-project-to-pdf-in-csharp/"
resourcelistlink3="https://blog.aspose.com/tasks/convert-mpp-to-tiff-in-csharp/"
resourcelisttext="在 C# 中将 MPP 转换为 MPX"
resourcelisttext2="在 C# .NET 中将 Microsoft Project 转换为 PDF"
resourcelisttext3="在 C# .NET 中将 MPP 转换为 TIFF"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="文档"
resourcealt="文档"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/tasks/net/product-overview/#rich-features"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Tasks/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Tasks for .NET 功能"
resourcelisttext2="安装 Aspose.Tasks for .NET NuGet 包"
resourcelisttext3="Aspose.Tasks for .NET 付费支持服务台"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="知识库"
resourcealt="代码示例"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/tasks/net/how-to-convert-mpp-to-excel-using-csharp/"
resourcelistlink2="https://kb.aspose.com/tasks/net/how-to-extract-microsoft-project-file-metadata-in-c-sharp/"
resourcelistlink3="https://kb.aspose.com/tasks/net/how-to-add-weekdays-in-mpp-using-csharp/"
resourcelisttext="如何使用 C# 将 MPP 转换为 Excel"
resourcelisttext2="如何在 C# 中提取 MS 项目文件元数据"
resourcelisttext3="如何使用 C# 在 MPP 中添加工作日"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="准备好开始了吗？"
rtstext="下载免费试用版"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="查看所有API"
>}}

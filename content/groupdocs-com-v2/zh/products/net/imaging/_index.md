---
title: 用于操作和编辑照片的 C# .NET 图像处理 API
description: .NET 图像处理 API，用于在 C#、ASP.NET 或 VB.NET 应用程序中创建、操作和编辑照片。将图像转换为 PDF、JPG、PNG 和 GIF 格式。
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="用于加载、操作和编辑照片的 C# .NET 图像处理 API"
  inheadertext="使用这个强大且功能丰富的 .NET 成像 API 简化您的图像处理。以编程方式创建、修改和导出图像，或快速对照片应用不同的效果和滤镜。您还可以将图像转换为 PDF、JPG、PNG、GIF、SVG、PSD、BMP 和其他格式。"
  ctabtn="下载免费试用版"
  ctabtn="下载免费试用版"
  ctalink="https://releases.aspose.com/imaging/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="查看所有API"
  bchomelink="/"
  bchome="家"
  bcpage="影像学"
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
subnav5="https://purchase.aspose.com/pricing/imaging/net"
subnavtxt5="价钱" 
subbtn1="https://docs.aspose.com/imaging/net/"
subbtntxt1="学习"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="买"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="C# .NET 中的高级照片编辑和操作"
   subtext="Aspose.Imaging for .NET 是一个强大而灵活的图像处理 API，使 C#、ASP.NET 和 VB.NET 开发人员能够创建、加载、编辑、操作和转换众所周知的图像文件格式，例如 JPG、PNG、GIF 、BMP、TIFF、EMG、SVG 和 WebP 等。凭借广泛的支持功能和精湛的图像处理功能，Aspose.Imaging for .NET 是开发人员将图像处理功能合并到其 .NET 应用程序中的理想解决方案。"
   subtext2="借助此 .NET 照片编辑 API，将照片转换为灰度、调整图像的亮度和对比度或应用其他效果和滤镜。它还支持以编程方式调整图像大小、压缩、裁剪、倾斜校正和合并图像。您可以将编辑的图像转换为 PDF、PSD、GIF、PNG、JPEG 和其他文件类型。这个适用于 .NET 的图像处理 API 让您能够满足照片编辑和操作的需求。"
   >}} 
   {{< products/product-text-blocks >}}
   <h2>入门</h2>
   <p>请查看<a href="https://docs.aspose.com/imaging/net/system-requirements/">系统要求</a>页面，检查您最终设置 .NET 图像 API 的先决条件没有任何问题。</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Imaging for .NET 安装"
>}} 
<p>请从<a href="https://releases.aspose.com/imaging/net/">下载部分</a>下载 DLL 或 MSI 安装程序以安装 .NET 图像处理 API。或者，您还可以使用 <a href="https://www.nuget.org/packages/Aspose.Imaging/">NuGet 包</a> 来设置 API。下面提供了包管理器控制台的命令：</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}} 
PM > Install-Package Aspose.Imaging 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="如何在 .NET 中转换图像并旋转或翻转图像"
featuretext="Aspose.Imaging for .NET 能够以编程方式将图像转换为不同的文件格式。它允许 .NET 开发人员转换众所周知的光栅和矢量图像，例如 PNG、JPG、BMP、GIF、TIFF、SVG、EPS、CDR、EMF 和 WebP。您还可以在 .NET 图像处理应用程序中翻转和旋转图像。"
>}} 
{{< products/product-feature-blocks-col
featurecolheading="将图像转换为 PDF、JPG、PNG 和 .NET 中的其他格式"
>}} 
<p>借助 .NET 图像 API，开发人员可以轻松地将图像转换为 PDF、JPG、PNG、BMP、GIF、SVG 和其他格式。将 PNG 转换为 JPG 是一种流行的图像转换选项，可帮助将照片或扫描图像从一种文件格式转换为另一种文件格式。 Aspose.Imaging for .NET 库允许使用最少的编码进行这种转换。请检查以下信息以获得更多帮助：</p>
<ul>
   <li>使用 <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a> 类加载源 PNG 文件。</li>
   <li>使用 Image.Save(string, JpegOptions) 方法将 PNG 转换为 JPG。</li>
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
featurecolheading="在 .NET 图像处理应用程序中翻转或旋转图像"
>}} 
<p>您可以通过合并翻转和旋转图像等照片编辑功能来增强 .NET 图像处理应用程序。 Aspose.Imaging for .NET API 除了能够水平或垂直翻转图像之外，还允许您将图像旋转 90 度、180 度和 270 度。下面给出的步骤和 C# 代码片段提供了更多帮助：</p>
<ul>
   <li>使用 <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a> 类加载图像文件。</li>
   <li>使用 <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image/methods/rotateflip">Image.RotateFlip(RotateFlipType.Rotate180FlipX)< 将图像旋转 180 度并水平翻转/a> 方法。</li>
   <li>使用 <a href="https://reference.aspose.com/imaging/net/aspose.imaging.image/save/methods/3">Image.Save(string)</a> 方法保存更新的图像。</li>
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
   <p class="col-lg-12">有关 Aspose.Imaging for .NET API 的更多工作示例，请访问 <a href="https://github.com/aspose-imaging/Aspose.Imaging-for-.NET/tree/master/Examples">GitHub示例</a>页面。如果您希望即时转换、调整大小、压缩、水印、旋转、翻转、裁剪、倾斜校正、编辑或合并多格式图像，请检查 <a href="https://products.aspose.app/imaging/family">Aspose.Imaging 的免费在线应用程序</a>。</p>
{{< products/product-feature-blocks
featureheading="为您的 .NET 图像处理应用程序添加图像压缩功能"
featuretext="Aspose.Imaging for .NET 允许压缩图像以帮助减小图像文件的大小。该 .NET 成像 API 出色的图像压缩算法可让您将文件大小减少 30 - 70%，而不会影响图像质量。这样，您可以有效地存储和传输图像文件，而不必担心文件大小。"
>}} 
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="常问问题"
>}} 
   {{< products/faq-block
 faqquery="1. 如何在.NET 中转换图像文件？"
 faqanswer="使用 Aspose.Imaging for .NET API 可以快速轻松地在 .NET 中转换 JPG、PNG、BMP、GIF、SVG、CDR、TIFF、EMF、EPS 等图像。只需几行 .NET 编码即可将多格式图像转换为不同的文件格式。"
>}} 
   {{< products/faq-block 
 faqquery="2. 合并或转换图像需要多长时间？"
 faqanswer=".NET 图像处理 API 运行速度快，可立即完成您的图像转换和合并请求。"
>}} 
   {{< products/faq-block
 faqquery="3. 使用.NET API 处理照片和图像安全吗？"
 faqanswer="使用 Aspose.Imaging for .NET API 处理照片和图像时，您可以确保照片和图像的安全性。我们确保您的数据隐私，并采取一切必要措施为您提供安全的用户体验。"
>}} 
   {{< products/faq-block
 faqquery="4. 我可以在 Mac OS、Windows 或 Linux 上处理图像文件吗？"
 faqanswer="是的，.NET 的映像 API 可跨不同的操作系统、框架和操作环境工作。您可以在您选择的平台上使用它，并且不需要安装任何其他软件即可运行。"
>}} 
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper 
   popularheading="照片和图像处理工具"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG 到 PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/jpeg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG 转 PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/png-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG 转 PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/svg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG 到 PSD"
moreproducts="https://products.aspose.com/imaging/net/conversion/jpeg-to-psd/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG 转 JPEG"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/SVG-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP 转 WEBP"
moreproducts="https://products.aspose.com/imaging/net/conversion/bmp-to-webp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF 转 SVG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-svg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF 转 JPEG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="CDR 转 PNG"
moreproducts="https://products.aspose.com/imaging/net/conversion/cdr-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="合并 JPG"
moreproducts="https://products.aspose.com/imaging/net/merge/jpg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="合并 TIFF"
moreproducts="https://products.aspose.com/imaging/net/merge/tiff/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="合并 PNG"
moreproducts="https://products.aspose.com/imaging/net/merge/png/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="寻求帮助？"
bartext="查看我们的支持渠道，以帮助解决与 Aspose 产品 API 功能和工作相关的问题。"
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/imaging/net/"
 resourcetxt2="API参考"
 resourcelinks2="https://reference.aspose.com/imaging/" 
 resourcetxt3="知识库"
 resourcelinks3="https://kb.aspose.com/imaging/net/"
 resourcetxt4="免费支持"
 resourcelinks4="https://forum.aspose.com/c/imaging/14"
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
 resourcelistlink="https://blog.aspose.com/imaging/draw-shapes-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/imaging/blur-images-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/imaging/adjust-image-contrast-brightness-gamma-csharp/"
 resourcelisttext="在 C# 中绘制形状 - 直线、圆弧和矩形"
 resourcelisttext2="在 C# 中以编程方式模糊图像"
 resourcelisttext3="调整图像对比度、亮度和伽玛值"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="文档"
 resourcealt="文档"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/imaging/net/features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Imaging/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Imaging for .NET 功能"
 resourcelisttext2="安装 Aspose.Imaging for .NET NuGet 包"
 resourcelisttext3="Aspose.Imaging for .NET 付费支持服务台"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="知识库"
 resourcealt="代码示例"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/imaging/net/how-to-compress-image-size-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/imaging/net/how-to-draw-graphics-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/imaging/net/how-to-resize-image-in-c-sharp/"
 resourcelisttext="如何在 C# 中压缩图像大小"
resourcelisttext2="如何用 C# 绘制图形"
resourcelisttext3="如何在 C# 中调整图像大小"
>}} 
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="准备好开始了吗？"
rtstext="下载免费试用版"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="查看所有API"
>}} 

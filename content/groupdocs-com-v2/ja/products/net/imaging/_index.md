---
title: 写真を操作および編集するための C# .NET 画像処理 API
description: C#、ASP.NET、または VB.NET アプリで写真を作成、操作、編集するための .NET 画像処理 API。画像を PDF、JPG、PNG、GIF 形式に変換します。
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="写真をロード、操作、編集するための C# .NET 画像処理 API"
  inheadertext="この強力で機能豊富な .NET イメージング API を使用して、画像処理を合理化します。プログラムで画像を作成、変更、エクスポートしたり、さまざまな効果やフィルターを写真にすばやく適用したりできます。画像を PDF、JPG、PNG、GIF、SVG、PSD、BMP、その他の形式に変換することもできます。"
  ctabtn="無料トライアルをダウンロード"
  ctabtn="無料トライアルをダウンロード"
  ctalink="https://releases.aspose.com/imaging/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="すべての API を表示"
  bchomelink="/"
  bchome="家"
  bcpage="イメージング"
  bclink2="製品"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="概要" 
subnav2="#features"
subnavtxt2="特徴" 
subnav3="#support"
subnavtxt3="サポート" 
subnav4="#examples"
subnavtxt4="例" 
subnav5="https://purchase.aspose.com/pricing/imaging/net"
subnavtxt5="価格設定" 
subbtn1="https://docs.aspose.com/imaging/net/"
subbtntxt1="学ぶ"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="買う"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="C# .NET での高度な写真編集と操作"
   subtext="Aspose.Imaging for .NET は、C#、ASP.NET、および VB.NET 開発者が JPG、PNG、GIF などのよく知られた画像ファイル形式を作成、読み込み、編集、操作、変換できる堅牢かつ柔軟な画像処理 API です。 、BMP、TIFF、EMG、SVG、WebP など。幅広いサポート機能と優れた画像処理機能を備えた Aspose.Imaging for .NET は、開発者が画像操作機能を .NET アプリに組み込むための理想的なソリューションです。"
   subtext2="この .NET 写真編集 API を利用して、写真をグレースケールに変換したり、画像の明るさとコントラストを調整したり、その他の効果やフィルターを適用したりできます。また、プログラムによる画像のサイズ変更、圧縮、トリミング、傾き補正、結合もサポートしています。編集した画像を PDF、PSD、GIF、PNG、JPEG、その他のファイル形式に変換できます。この .NET 用の画像処理 API を使用すると、写真の編集と操作のニーズを常に把握できます。"
   >}} 
   {{< products/product-text-blocks >}}
   <h2>はじめる</h2>
   <p><a href="https://docs.aspose.com/imaging/net/system-requirements/">システム要件</a> ページを参照して、お客様側で .NET イメージ API を設定するための前提条件を確認してください。問題なく。</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Imaging for .NET のインストール"
>}} 
<p><a href="https://releases.aspose.com/imaging/net/">ダウンロード セクション</a>から DLL または MSI インストーラをダウンロードして、.NET 画像処理 API をインストールしてください。あるいは、API のセットアップに <a href="https://www.nuget.org/packages/Aspose.Imaging/">NuGet パッケージ</a> を使用することもできます。パッケージ マネージャー コンソールのコマンドは次のとおりです。</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}} 
PM > Install-Package Aspose.Imaging 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading=".NET で画像を変換し、画像を回転または反転する方法"
featuretext="Aspose.Imaging for .NET を使用すると、プログラムで画像をさまざまなファイル形式に変換できます。 .NET 開発者は、PNG、JPG、BMP、GIF、TIFF、SVG、EPS、CDR、EMF、WebP などのよく知られたラスター イメージやベクター イメージを変換できます。 .NET 画像処理アプリ内で画像を反転および回転することもできます。"
>}} 
{{< products/product-feature-blocks-col
featurecolheading=".NET で画像を PDF、JPG、PNG、その他の形式に変換"
>}} 
<p>.NET イメージング API を利用すると、開発者は画像を PDF、JPG、PNG、BMP、GIF、SVG などの形式に簡単に変換できます。 PNG から JPG への変換は、写真やスキャンした画像をあるファイル形式から別のファイル形式に変換するのに役立つ一般的な画像変換オプションです。 Aspose.Imaging for .NET ライブラリを使用すると、最小限のコーディングでこの変換が可能になります。詳細については、次の情報を確認してください。</p>
<ul>
   <li><a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a> クラスを使用して、ソース PNG ファイルを読み込みます。</li>
   <li>Image.Save(string, JpegOptions) メソッドを使用して PNG を JPG に変換します。</li>
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
featurecolheading=".NET 画像処理アプリで画像を反転または回転する"
>}} 
<p>画像の反転や回転などの写真編集機能を組み込むことで、.NET 画像操作アプリを拡張できます。 Aspose.Imaging for .NET API を使用すると、画像を水平方向または垂直方向に反転する機能に加えて、90 度、180 度、270 度回転させることができます。以下の手順と C# コード スニペットは、さらに詳しいヘルプを提供します。</p>
<ul>
   <li><a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a> クラスを使用して画像ファイルを読み込みます。</li>
   <li><a href="https://reference.aspose.com/imaging/net/aspose.imaging/image/methods/rotateflip">Image.RotateFlip(RotateFlipType.Rotate180FlipX)<を使用して、画像を 180 度回転し、水平方向に反転します。 /a> メソッド。</li>
   <li><a href="https://reference.aspose.com/imaging/net/aspose.imaging.image/save/methods/3">Image.Save(string)</a> メソッドを使用して、更新されたイメージを保存します。</li>
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
   <p class="col-lg-12">Aspose.Imaging for .NET API のその他の実例については、<a href="https://github.com/aspose-imaging/Aspose.Imaging-for-.NET/tree/master/Examples">GitHub にアクセスしてください。例</a>ページ。マルチフォーマット画像をその場で変換、サイズ変更、圧縮、透かし、回転、反転、トリミング、傾き補正、編集、または結合したい場合は、<a href="https://products.aspose.app/imaging/family/">無料オンライン アプリ</a>。</p>
{{< products/product-feature-blocks
featureheading=".NET 画像操作アプリに画像圧縮機能を追加する"
featuretext="Aspose.Imaging for .NET を使用すると、画像を圧縮して画像ファイルのサイズを削減できます。この .NET イメージング API の優れた画像圧縮アルゴリズムにより、画質を損なうことなくファイル サイズを 30 ～ 70% 削減できます。これにより、ファイル サイズを気にすることなく、画像ファイルを効率的に保存および転送できます。"
>}} 
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="よくある質問"
>}} 
   {{< products/faq-block
 faqquery="1. .NET で画像ファイルを変換するにはどうすればよいですか?"
 faqanswer="Aspose.Imaging for .NET API を使用すると、JPG、PNG、BMP、GIF、SVG、CDR、TIFF、EMF、EPS などの画像を .NET ですばやく簡単に変換できます。数行の .NET コーディングだけで、マルチフォーマットの画像をさまざまなファイルフォーマットに変換できます。"
>}} 
   {{< products/faq-block 
 faqquery="2. 画像の結合または変換にはどのくらい時間がかかりますか?"
 faqanswer=".NET 画像処理 API は高速に動作し、画像の変換および結合リクエストをすぐに完了します。"
>}} 
   {{< products/faq-block
 faqquery="3. .NET API を使用して写真や画像を処理するのは安全ですか?"
 faqanswer="Aspose.Imaging for .NET API を使用して写真や画像を処理する際、そのセキュリティを確保できます。当社はお客様のデータのプライバシーを確保し、安全なユーザー エクスペリエンスを提供するために必要なあらゆる措置を講じます。"
>}} 
   {{< products/faq-block
 faqquery="4. Mac OS、Windows、または Linux で画像ファイルを処理できますか?"
 faqanswer="はい、.NET 用イメージング API は、さまざまな OS、フレームワーク、およびオペレーティング環境で動作します。選択したプラットフォームで使用でき、機能するために追加のソフトウェアをインストールする必要はありません。"
>}} 
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper 
   popularheading="写真と画像の操作ツール"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEGからPDFへ"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/jpeg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNGからPDFへ"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/png-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVGからPDFへ"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/svg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEGからPSDへの変換"
moreproducts="https://products.aspose.com/imaging/net/conversion/jpeg-to-psd/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVGからJPEGへの変換"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/SVG-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMPからWEBPへ"
moreproducts="https://products.aspose.com/imaging/net/conversion/bmp-to-webp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIFからSVGへ"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-svg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIFからJPEGへ"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="CDRからPNGへの変換"
moreproducts="https://products.aspose.com/imaging/net/conversion/cdr-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPGを結合"
moreproducts="https://products.aspose.com/imaging/net/merge/jpg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="TIFFを結合"
moreproducts="https://products.aspose.com/imaging/net/merge/tiff/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PNG を結合"
moreproducts="https://products.aspose.com/imaging/net/merge/png/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="助けをお探しですか?"
bartext="Aspose 製品の API 機能や動作に関する質問については、サポート チャネルをご確認ください。"
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/imaging/net/"
 resourcetxt2="APIリファレンス"
 resourcelinks2="https://reference.aspose.com/imaging/" 
 resourcetxt3="知識ベース"
 resourcelinks3="https://kb.aspose.com/imaging/net/"
 resourcetxt4="無料サポート"
 resourcelinks4="https://forum.aspose.com/c/imaging/14"
 >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="リソース"
 sectionid="support"
 >}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="ブログ"
 resourcealt="ブログ"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/imaging/draw-shapes-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/imaging/blur-images-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/imaging/adjust-image-contrast-brightness-gamma-csharp/"
 resourcelisttext="C# で図形を描く - 線、円弧、四角形"
 resourcelisttext2="C# でプログラム的に画像をぼかす"
 resourcelisttext3="画像のコントラスト、明るさ、ガンマを調整する"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="ドキュメンテーション"
 resourcealt="ドキュメンテーション"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/imaging/net/features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Imaging/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Imaging for .NET の機能"
 resourcelisttext2="Aspose.Imaging for .NET NuGet パッケージをインストールする"
 resourcelisttext3="Aspose.Imaging for .NET 有料サポート ヘルプデスク"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="知識ベース"
 resourcealt="コードサンプル"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/imaging/net/how-to-compress-image-size-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/imaging/net/how-to-draw-graphics-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/imaging/net/how-to-resize-image-in-c-sharp/"
 resourcelisttext="C# で画像サイズを圧縮する方法"
resourcelisttext2="C# でグラフィックを描画する方法"
resourcelisttext3="C# で画像のサイズを変更する方法"
>}} 
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="始める準備はできていますか?"
rtstext="無料トライアルをダウンロード"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="すべての API を表示"
>}} 

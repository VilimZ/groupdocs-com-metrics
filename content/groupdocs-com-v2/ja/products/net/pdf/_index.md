---
title: PDF ドキュメントを処理、編集、変換するための .NET 用 PDF API
description: PDF ドキュメントを生成および結合するための高度な .NET PDF ライブラリ。 C#、ASP.NET、VB.NET アプリで PDF から JPG、PDF から Excel、PDF から Word に変換します。
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="PDF ドキュメントを処理、編集、正確に変換するための .NET 用 PDF API"
  inheadertext="Adobe Acrobat を必要とせずに、強力な PDF 編集機能、変換、解析機能を体験してください。 .NET アプリで PDF ドキュメントを DOC、DOCX、PPTX、XLS、JPG、PNG、GIF、SVG、およびその他の形式にレンダリングします。"
  ctabtn="無料トライアルをダウンロード"
  ctabtn="無料トライアルをダウンロード"
  ctalink="https://releases.aspose.com/pdf/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="すべての API を表示"
  bchomelink="/"
  bchome="家"
  bcpage="PDF"
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
subnav5="https://purchase.aspose.com/pricing/pdf/net"
subnavtxt5="価格設定" 
subbtn1="https://docs.aspose.com/pdf/net/"
subbtntxt1="学ぶ"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="買う"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="C# .NET で PDF ドキュメント処理を次のレベルに引き上げます"
   subtext="Aspose.PDF for .NET を利用して包括的な PDF 操作機能を統合することで、.NET ドキュメント処理アプリケーションをアップグレードします。このネイティブ ライブラリには、完璧な PDF ファイル処理機能がロードされており、.NET 開発者は PDF を生成、処理、編集、解析するだけでなく、PDF ドキュメントを正確に変換することもできます。この .NET 用 PDF API を使用すると、テキスト、注釈、画像を PDF ドキュメントにすばやく簡単に挿入し、添付ファイル、透かし、ブックマークを追加または削除し、PDF ページを分割または結合し、PDF ファイル内のフォーム フィールドを処理できます。"
   subtext2="Aspose.PDF for .NET は、比類のないクロスプラットフォーム互換性を提供し、.NET Framework や .NET Core などの複数のフレームワーク間でシームレスに機能するように設計されています。さらに、この .NET PDF API を使用して、C#、ASP.NET、および VB.NET で PDF コンバーター アプリケーションを構築し、PDF から JPG、PDF から Excel、PDF から Word、PDF から PowerPoint、およびその他のいくつかのファイル形式を変換できます。高い忠実度。"
   >}} 
   {{< products/product-text-blocks >}}
   <h2>はじめる</h2>
   <p>Aspose.PDF for .NET API を正しく設定して使用するには、以下の情報を確認してください。の PDF API を正常にセットアップするための前提条件のリストについては、<a href="https://docs.aspose.com/pdf/net/system-requirements/">システム要件</a> ページを参照してください。ネット</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading=".NET インストール用の Aspose.PDF"
>}}
<p>システム上で Aspose.PDF for .NET をセットアップするには、<a href="https://releases.aspose.com/pdf/net/">ダウンロード セクション</から DLL または MSI インストーラーを直接ダウンロードできます。あ>。または、.NET PDF API のインストールに <a href="https://www.nuget.org/packages/Aspose.PDF/">NuGet パッケージ</a> を使用することもできます。パッケージマネージャー API コマンドを以下に示します。</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM> Install-Package Aspose.PDF
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading=".NET で PDF を Word に変換し、PDF をすばやく結合する方法"
featuretext="Aspose.PDF for .NET は、PDF の Word やその他のファイル形式への変換、PDF の .NET への結合など、膨大なドキュメント処理機能をサポートしています。この .NET ライブラリを使用すると、サードパーティ ソフトウェアに依存せずに完全に独立した PDF ドキュメント処理を体験できます。"
>}}
{{< products/product-feature-blocks-col
 featurecolheading=".NET で PDF を Word に変換する"
>}}
<p>PDF から Word への変換機能を統合することで、既存の .NET PDF 変換アプリをアップグレードします。 Aspose.PDF for .NET API を使用すると、.NET ドキュメント変換アプリ内で PDF を DOC に変換したり、PDF を DOCX に変換したりできます。 .NET で PDF を Word に変換するには、次の手順とコード スニペットを参照してください。</p>
<ul>
   <li>ソース PDF ドキュメントを使用して <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document/">Document</a> オブジェクトのインスタンスを作成します。</li>
   <li><strong>Document.Save()</strong> メソッドを呼び出して、<strong>SaveFormat.Doc</strong> 形式で保存します。</li>
</ul>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp2"
>}}
public static void ConvertPDFtoWord()
{
    // Open the source PDF document
    Document pdfDocument = new Document(_dataDir + "PDFToDOC.pdf");
    // Save the file into MS document format
    pdfDocument.Save(_dataDir + "PDFToDOC_out.doc", SaveFormat.Doc);
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
 featurecolheading=".NET で PDF ファイルを結合する"
>}}
<p>PDF ファイルの結合は、Aspose.PDF for .NET API によってサポートされています。 PDF ファイルを C# .NET アプリにすばやく簡単に結合するには、以下の手順とコード スニペットを確認してください。</p>
<ul>
   <li>2 つの <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document">Document</a> オブジェクトを作成し、それぞれに入力 PDF ファイルの 1 つを含めます。</li>
   <li>次に、他の PDF ファイルを追加する Document オブジェクトの <a href="https://reference.aspose.com/pdf/net/aspose.pdf/pagecollection">PageCollection</a> コレクションの Add メソッドを呼び出します。 。</li>
   <li>2 番目の Document オブジェクトの PageCollection コレクションを最初の PageCollection コレクションの Add メソッドに渡します。</li>
   <li>最後に、<a href="https://reference.aspose.com/pdf/net/aspose.pdf.document/save/methods/4">Save</a> メソッドを使用して、出力 PDF ファイルを保存します。</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// The path to the documents directory.
string dataDir = RunExamples.GetDataDir_AsposePdf_Pages();
// Open first document
Document pdfDocument1 = new Document(dataDir + "Concat1.pdf");
// Open second document
Document pdfDocument2 = new Document(dataDir + "Concat2.pdf");
// Add pages of second document to the first
pdfDocument1.Pages.Add(pdfDocument2.Pages);
dataDir = dataDir + "ConcatenatePdfFiles_out.pdf";
// Save concatenated output file
pdfDocument1.Save(dataDir);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Aspose.PDF for .NET API の実例とコード サンプルの詳細については、<a href="https://github.com/aspose-pdf/Aspose.PDF-for-.NET/tree/master/Examples">GitHub の例</a>ページ。 PDF ドキュメントをその場で表示、編集、結合、分割、注釈付け、比較、または変換したい場合は、無料のオンライン <a href="https://products.aspose.app/pdf/family" をご確認ください。 >PDF 処理アプリ</a></p>
{{< products/product-feature-blocks
featureheading=".NET での安全な PDF ファイル処理"
featuretext="Aspose.PDF for .NET は、デジタル署名のサポート、パスワード保護、暗号化などのセキュリティ機能を提供する、完全に安全な PDF 処理ライブラリです。これにより、不正なアクセスや変更を防止しながら、PDF ドキュメントの信頼できるアクセス、処理、送信が保証されます。さらに、この .NET PDF 処理 API を使用するために Adobe Acrobat をインストールする必要はありません。"
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="よくある質問"
>}}
   {{< products/faq-block
 faqquery="1. .NET で PDF を変換するにはどうすればよいですか?"
 faqanswer="Aspose.PDF for .NET API を使用すると、.NET での PDF の変換は簡単かつ簡単になります。必要なコードは数行だけで、PDF ファイルを複数のファイル形式に変換できます。"
>}}
   {{< products/faq-block 
 faqquery="2. PDF の結合または変換にはどのくらい時間がかかりますか?"
 faqanswer=".NET PDF API は高速に動作し、ドキュメントの結合または変換リクエストをすぐに処理します。"
>}}
   {{< products/faq-block
 faqquery="3. .NET PDF API を使用して PDF を処理するのは安全ですか?"
 faqanswer="もちろん！ Aspose.PDF for .NET API を使用してドキュメントを処理する際、ドキュメントのセキュリティについては安心してください。当社はお客様のデータのプライバシーを確保し、安全なユーザー エクスペリエンスを提供するために必要なあらゆる措置を講じます。"
>}}
   {{< products/faq-block
 faqquery="4. Mac OS、Windows、または Linux で PDF を処理できますか?"
 faqanswer="はい、.NET PDF 操作 API は、さまざまな OS、フレームワーク、およびオペレーティング環境で動作します。選択したプラットフォームで使用できます。当社の .NET PDF ライブラリを機能させるために追加のソフトウェアをインストールする必要はありません。"
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="PDF操作ツール"
   >}}
   {{< products/popularapp-anchor
 anchorlink="PDF から Word へ"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-word/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDFからDOCへ"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-doc/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDFからDOCXへ"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-docx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDFからEXCELへ"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-excel/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDFからXLSへの変換"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xls/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDFからXLSXへの変換"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDFからPPTXへの変換"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDFからHTMLへ"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDFからBMPへの変換"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDFからTIFFへ"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-tiff/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDFからPNGへ"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDFからGIFへ"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDFからBMPへの変換"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="助けをお探しですか?"
bartext="Aspose 製品の API 機能や動作に関する質問については、サポート チャネルをご確認ください。"
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/pdf/net/"
 resourcetxt2="APIリファレンス"
 resourcelinks2="https://reference.aspose.com/pdf/" 
 resourcetxt3="知識ベース"
 resourcelinks3="https://kb.aspose.com/pdf/net/"
 resourcetxt4="無料サポート"
 resourcelinks4="https://forum.aspose.com/c/pdf/10"
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
 resourcelistlink="https://blog.aspose.com/pdf/convert-latex-to-pdf-in-python/"
 resourcelistlink2="https://blog.aspose.com/pdf/convert-pdf-to-ppt-in-python/"
 resourcelistlink3="https://blog.aspose.com/pdf/convert-pdf-to-latex-in-python/"
 resourcelisttext="Python で LaTeX を PDF に変換する"
 resourcelisttext2="Python で PDF を PPT に変換する"
 resourcelisttext3="Python で PDF を LaTeX に変換する"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="ドキュメンテーション"
 resourcealt="ドキュメンテーション"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/pdf/net/key-features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.PDF/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.PDF for .NET の機能"
 resourcelisttext2="Aspose.PDF for .NET NuGet パッケージをインストールする"
 resourcelisttext3="Aspose.PDF for .NET 有料サポート ヘルプデスク"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="知識ベース"
 resourcealt="コードサンプル"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/words/net/how-to-insert-hyperlink-in-word-using-csharp/"
 resourcelistlink2="https://kb.aspose.com/total/python/how-to-install-python-to-run-aspose-pdf-for-python-via-net/"
 resourcelistlink3="https://kb.aspose.com/pdf/net/how-to-add-hyperlink-in-pdf-using-csharp/"
 resourcelisttext="C# を使用して Word にハイパーリンクを挿入する方法"
resourcelisttext2="Python をインストールして .NET 経由で Aspose.PDF for Python を実行する方法"
resourcelisttext3="C# を使用して PDF にハイパーリンクを追加する方法"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="始める準備はできていますか?"
rtstext="無料トライアルをダウンロード"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="すべての API を表示"
>}}

---
title: API PDF untuk .NET untuk memproses, mengedit, dan mengonversi dokumen PDF
description: Pustaka .NET PDF canggih untuk membuat dan menggabungkan dokumen PDF. Konversi PDF ke JPG, PDF ke Excel, dan PDF ke Word di aplikasi C#, ASP.NET & VB.NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API PDF untuk .NET untuk memproses, mengedit, dan mengonversi dokumen PDF secara akurat"
  inheadertext="Rasakan fungsionalitas pengeditan PDF yang kuat, konversi, dan kemampuan parsing tanpa memerlukan Adobe Acrobat. Render dokumen PDF ke DOC, DOCX, PPTX, XLS, JPG, PNG, GIF, SVG, dan format lainnya di aplikasi .NET Anda."
  ctabtn="Unduh Uji Coba Gratis"
  ctabtn="Unduh Uji Coba Gratis"
  ctalink="https://releases.aspose.com/pdf/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Lihat Semua API"
  bchomelink="/"
  bchome="Rumah"
  bcpage="PDF"
  bclink2="Produk"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Ringkasan" 
subnav2="#features"
subnavtxt2="Fitur" 
subnav3="#support"
subnavtxt3="Mendukung" 
subnav4="#examples"
subnavtxt4="Contoh" 
subnav5="https://purchase.aspose.com/pricing/pdf/net"
subnavtxt5="Harga" 
subbtn1="https://docs.aspose.com/pdf/net/"
subbtntxt1="Mempelajari"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Membeli"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Tingkatkan pemrosesan dokumen PDF ke level selanjutnya di C# .NET"
   subtext="Tingkatkan aplikasi pemrosesan dokumen .NET Anda dengan mengintegrasikan fitur manipulasi PDF yang komprehensif dengan bantuan Aspose.PDF untuk .NET. Pustaka asli ini dimuat dengan kemampuan pemrosesan file PDF yang sempurna yang memungkinkan pengembang .NET tidak hanya menghasilkan, memproses, mengedit, dan mengurai PDF tetapi juga mengonversi dokumen PDF secara akurat. Sisipkan teks, anotasi, dan gambar dengan cepat dan mudah ke dokumen PDF, tambahkan atau hapus lampiran, tanda air, dan bookmark, pisahkan atau gabungkan halaman PDF, dan proses bidang formulir di file PDF Anda menggunakan API PDF untuk .NET ini."
   subtext2="Menawarkan kompatibilitas lintas platform yang tak tertandingi, Aspose.PDF untuk .NET dirancang untuk berfungsi dengan mulus di berbagai kerangka kerja seperti .NET Framework dan .NET Core. Selain itu, Anda dapat menggunakan .NET PDF API ini untuk membangun aplikasi konverter PDF di C#, ASP.NET, dan VB.NET dan mengonversi PDF ke JPG, PDF ke Excel, PDF ke Word, PDF ke PowerPoint, dan beberapa format file lainnya dengan kesetiaan yang tinggi."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Mulai</h2>
   <p>Untuk menyiapkan dan menggunakan Aspose.PDF untuk .NET API dengan benar, periksa informasi yang diberikan di bawah ini. Lihat halaman <a href="https://docs.aspose.com/pdf/net/system-requirements/">Persyaratan Sistem</a> untuk mengetahui daftar prasyarat agar berhasil menyiapkan API PDF untuk . BERSIH</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.PDF untuk Instalasi .NET"
>}}
<p>Untuk menyiapkan Aspose.PDF untuk .NET di sistem, Anda dapat mengunduh DLL atau Pemasang MSI langsung dari <a href="https://releases.aspose.com/pdf/net/">bagian unduhan</ a>. Sebagai alternatif, Anda dapat menggunakan <a href="https://www.nuget.org/packages/Aspose.PDF/">Paket NuGet</a> untuk instalasi .NET PDF API. Perintah package manager API diberikan di bawah ini.</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM> Install-Package Aspose.PDF
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Cara Mengonversi PDF ke Word di .NET dan Menggabungkan PDF dengan Cepat"
featuretext="Aspose.PDF untuk .NET mendukung beragam fitur pemrosesan dokumen, termasuk mengonversi PDF ke Word dan format file lainnya serta menggabungkan PDF di .NET. Dengan menggunakan perpustakaan .NET ini, rasakan pemrosesan dokumen PDF yang sepenuhnya independen tanpa bergantung pada perangkat lunak pihak ketiga mana pun."
>}}
{{< products/product-feature-blocks-col
 featurecolheading="Konversi PDF ke Word di .NET"
>}}
<p>Tingkatkan versi aplikasi konversi .NET PDF Anda dengan mengintegrasikan fungsionalitas konversi PDF ke Word. Aspose.PDF untuk .NET API memungkinkan Anda mengonversi PDF ke DOC dan PDF ke DOCX dalam aplikasi konversi dokumen .NET Anda. Silakan lihat petunjuk berikut dan cuplikan kode untuk membantu Anda mengonversi PDF ke Word di .NET:</p>
<ul>
   <li>Buat instance objek <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document/">Dokumen</a> dengan dokumen PDF sumber.</li>
   <li>Simpan ke format <strong>SaveFormat.Doc</strong> dengan memanggil metode <strong>Document.Save()</strong>.</li>
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
 featurecolheading="Gabungkan File PDF di .NET"
>}}
<p>Menggabungkan file PDF didukung oleh Aspose.PDF untuk .NET API. Silakan periksa instruksi dan potongan kode yang diberikan di bawah ini untuk menggabungkan file PDF dengan cepat dan mudah di aplikasi C# .NET Anda:</p>
<ul>
   <li>Buat dua objek <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document">Dokumen</a>, masing-masing berisi salah satu file PDF masukan.</li>
   <li>Kemudian panggil metode Tambahkan koleksi <a href="https://reference.aspose.com/pdf/net/aspose.pdf/pagecollection">PageCollection</a> untuk objek Dokumen yang ingin Anda tambahkan ke file PDF lainnya .</li>
   <li>Lewati koleksi PageCollection dari objek Dokumen kedua ke metode Add koleksi PageCollection pertama.</li>
   <li>Terakhir, simpan file PDF keluaran menggunakan metode <a href="https://reference.aspose.com/pdf/net/aspose.pdf.document/save/methods/4">Simpan</a>.</li>
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
   <p class="col-lg-12">Untuk lebih banyak contoh kerja dan contoh kode Aspose.PDF untuk .NET API, silakan kunjungi <a href="https://github.com/aspose-pdf/Aspose.PDF-for-.NET/tree/master/Examples">Contoh GitHub</a> halaman. Jika Anda ingin melihat, mengedit, menggabungkan, memisahkan, membuat anotasi, membandingkan, atau mengonversi dokumen PDF dengan cepat, silakan lihat <a href="https://products.aspose.app/pdf/family" online gratis kami >Aplikasi pemrosesan PDF.</a></p>
{{< products/product-feature-blocks
featureheading="Pemrosesan file PDF yang aman di .NET"
featuretext="Aspose.PDF untuk .NET adalah perpustakaan pemrosesan PDF yang sepenuhnya aman yang menyediakan fitur keamanan seperti dukungan tanda tangan digital, perlindungan kata sandi, dan enkripsi. Ini memastikan akses, pemrosesan, dan pengiriman dokumen PDF Anda yang dapat diandalkan sambil mencegah akses dan modifikasi yang tidak sah. Selain itu, Anda tidak perlu menginstal Adobe Acrobat untuk menggunakan API pemrosesan .NET PDF ini."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Bagaimana cara mengonversi PDF di .NET?"
 faqanswer="Mengonversi PDF di .NET mudah dan langsung menggunakan Aspose.PDF untuk .NET API. Hanya membutuhkan beberapa baris kode dan Anda dapat mengonversi file PDF ke berbagai format file."
>}}
   {{< products/faq-block 
 faqquery="2. Berapa lama untuk menggabungkan atau mengonversi PDF?"
 faqanswer="API .NET PDF bekerja dengan cepat dan memproses permintaan penggabungan atau konversi dokumen Anda dalam waktu singkat."
>}}
   {{< products/faq-block
 faqquery="3. Apakah aman memproses PDF menggunakan .NET PDF API?"
 faqanswer="Tentu saja! Anda dapat yakin tentang keamanan dokumen Anda saat memprosesnya menggunakan Aspose.PDF untuk .NET API. Kami memastikan privasi data Anda dan mengambil semua tindakan yang diperlukan untuk memberi Anda pengalaman pengguna yang aman."
>}}
   {{< products/faq-block
 faqquery="4. Bisakah saya memproses PDF di Mac OS, Windows, atau Linux?"
 faqanswer="Ya, API manipulasi .NET PDF berfungsi di berbagai OS, kerangka kerja, dan lingkungan operasi. Anda dapat menggunakannya di platform pilihan Anda. Pustaka .NET PDF kami tidak memerlukan penginstalan perangkat lunak tambahan untuk berfungsi."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Alat Manipulasi PDF"
   >}}
   {{< products/popularapp-anchor
 anchorlink="PDF ke WORD"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-word/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF ke DOC"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-doc/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF ke DOCX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-docx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF ke EXCEL"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-excel/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF ke XLS"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xls/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF ke XLSX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF ke PPTX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF ke HTML"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF ke BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF ke TIFF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-tiff/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF ke PNG"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF ke GIF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF ke BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Mencari bantuan?"
bartext="Lihat saluran dukungan kami untuk mendapatkan bantuan terkait pertanyaan Anda terkait fitur dan cara kerja API produk Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/pdf/net/"
 resourcetxt2="Referensi API"
 resourcelinks2="https://reference.aspose.com/pdf/" 
 resourcetxt3="Dasar pengetahuan"
 resourcelinks3="https://kb.aspose.com/pdf/net/"
 resourcetxt4="Dukungan Gratis"
 resourcelinks4="https://forum.aspose.com/c/pdf/10"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Sumber daya"
 sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blog"
 resourcealt="Blog"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/pdf/convert-latex-to-pdf-in-python/"
 resourcelistlink2="https://blog.aspose.com/pdf/convert-pdf-to-ppt-in-python/"
 resourcelistlink3="https://blog.aspose.com/pdf/convert-pdf-to-latex-in-python/"
 resourcelisttext="Konversikan LaTeX ke PDF dengan Python"
 resourcelisttext2="Konversi PDF ke PPT dengan Python"
 resourcelisttext3="Konversikan PDF ke LaTeX dengan Python"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentasi"
 resourcealt="Dokumentasi"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/pdf/net/key-features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.PDF/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.PDF untuk Fitur .NET"
 resourcelisttext2="Instal Aspose.PDF untuk Paket .NET NuGet"
 resourcelisttext3="Aspose.PDF untuk .NET Helpdesk Dukungan Berbayar"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Dasar pengetahuan"
 resourcealt="Contoh Kode"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/words/net/how-to-insert-hyperlink-in-word-using-csharp/"
 resourcelistlink2="https://kb.aspose.com/total/python/how-to-install-python-to-run-aspose-pdf-for-python-via-net/"
 resourcelistlink3="https://kb.aspose.com/pdf/net/how-to-add-hyperlink-in-pdf-using-csharp/"
 resourcelisttext="Cara Menyisipkan Hyperlink di Word Menggunakan C#"
resourcelisttext2="Cara Memasang Python untuk Menjalankan Aspose.PDF untuk Python melalui .NET"
resourcelisttext3="Cara Menambahkan Hyperlink di PDF menggunakan C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Siap untuk memulai?"
rtstext="Unduh Uji Coba Gratis"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Lihat Semua API"
>}}

---
title: .NET Visio Diagram API untuk Membuat, Mengedit, dan Memproses Diagram
description: C# .NET Visio Diagram API untuk membuat, mengedit, dan memproses VSD, VSX, VTX, VSDX, dan file Visio lainnya. Konversi diagram ke format PDF, PNG & HTML.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Visio Diagram API untuk Membuat, Mengedit, Mengekspor, dan Memproses Diagram"
  inheadertext="API diagram .NET terbaik untuk menghasilkan, memanipulasi, dan mengonversi format file Microsoft Visio dengan sempurna seperti VSD, VDX, VSX, VSX, VSSX, VTX, dan VTSX dengan file diagram Visio berbasis C#, ASP.NET, dan VB.NET aplikasi pengolah."
  ctabtn="Unduh Uji Coba Gratis"
  ctabtn="Unduh Uji Coba Gratis"
  ctalink="https://releases.aspose.com/diagram/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Lihat Semua API"
  bchomelink="/"
  bchome="Rumah"
  bcpage="Diagram"
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
subnav5="https://purchase.aspose.com/pricing/diagram/net"
subnavtxt5="Harga" 
subbtn1="https://docs.aspose.com/diagram/net/"
subbtntxt1="Mempelajari"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Membeli"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="API .NET berfitur lengkap untuk memproses diagram Microsoft Visio"
   subtext="Aspose.Diagram untuk .NET adalah API diagram Visio yang fleksibel dan komprehensif yang memungkinkan pengembang perangkat lunak dan aplikasi membuat aplikasi pemrosesan file Visio yang kuat di C#, ASP.NET, dan VB.NET. Dengan bantuan API pembuatan diagram .NET asli ini, Anda dapat membuat aplikasi seluler, solusi desktop, dan alat untuk antarmuka web untuk membuat, memodifikasi, mengubah, dan mengekspor diagram Microsoft Visio. Aspose.Diagram untuk perpustakaan .NET mendukung format file Visio populer seperti VSD, VSDX, VTX, VDX, VSX, VSSX, VTSX, VSDM, dan VSSM. Anda dapat dengan cepat dan mudah mengembangkan solusi konversi diagram canggih menggunakan API diagram .NET Visio ini dan mengonversi file Visio Anda ke format file PDF, JPG, PNG, BMP, HTML, XPS, SVG, dan EMF."
   subtext2="Di antara banyak fitur pemrosesan file Visio yang canggih, Aspose.Diagram untuk .NET memungkinkan bentuk berputar, mengambil informasi tentang konektor dan font, mengelompokkan bentuk, menyuntikkan gambar ke dalam gambar, menambahkan halaman baru ke gambar Visio, dan melakukan lebih banyak lagi. Selain itu, Anda juga dapat menggambar persegi panjang, polyline, Bezier, dan banyak bentuk lainnya di halaman Visio."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Mulai</h2>
   <p>Harap periksa prasyarat di halaman <a href="https://docs.aspose.com/diagram/net/system-requirements/">Persyaratan Sistem</a> sebelum menyiapkan .NET diagramming API untuk penginstalan yang dioptimalkan dan pengalaman penggunaan API.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Diagram untuk Instalasi .NET"
>}}
<p>Untuk menginstal Aspose.Diagram untuk .NET API, Anda dapat mengunduh DLL atau penginstal MSI dari <a href="https://releases.aspose.com/diagram/net/">bagian unduhan</a>. Atau, Anda dapat menggunakan <a href="https://www.nuget.org/packages/Aspose.Diagram/">paket NuGet</a> untuk menyiapkan API diagram Visio untuk .NET. Perintah untuk konsol manajer paket diberikan di bawah ini:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Diagram 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Cara Membuat Diagram Visio Dari Awal dan Mengonversi Visio ke PDF di .NET"
featuretext="Pengembang dapat secara terprogram membuat diagram MS Visio dari awal menggunakan Aspose.Diagram untuk perpustakaan .NET. Anda dapat dengan mudah menyisipkan halaman dan bentuk baru, atau memanipulasi properti bentuk yang berbeda dalam file diagram yang Anda buat. Secara mandiri mengonversi format diagram Visio VSD dan VSDX ke file PDF dengan fidelitas tinggi juga didukung oleh API diagram .NET."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Buat Diagram Visio dari Awal di .NET"
>}}
<p>Aspose.Diagram untuk .NET API adalah solusi manipulasi diagram lengkap yang memungkinkan pengembang membuat diagram Visio yang dimuat dengan semua elemen penting seperti bentuk, diagram alur, komentar, dan banyak lagi. Anda dapat menggunakan API diagram .NET untuk membuat dokumen Visio dari awal dengan bantuan langkah-langkah dan informasi yang diberikan di bawah ini:</p>
<ul>
   <li>Periksa apakah direktori untuk menyimpan file ada.</li>
   <li>Buat direktori jika tidak ada.</li>
   <li>Inisialisasi objek dari kelas <a href="https://reference.aspose.com/diagram/net/aspose.diagram/diagram">Diagram</a>.</li>
   <li>Simpan diagram sebagai VSDX menggunakan <a href="https://reference.aspose.com/diagram/net/aspose.diagram.diagram/save/methods/2">Diagram.Save(String fileName, SaveFileFormat.VSDX)</a> metode.</li>
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
featurecolheading="Konversi Diagram MS Visio ke PDF di .NET"
>}}
<p>Mengonversi file ke format PDF memudahkan berbagi dan mengaksesnya di berbagai perangkat. Aspose.Diagram untuk .NET API memungkinkan konversi diagram Visio ke format PDF dalam aplikasi C# .NET Anda. Anda dapat mengonversi VSD atau VSDX ke PDF secara terprogram dengan kualitas konversi tinggi. Langkah-langkah dan informasi berikut akan membantu Anda mencapai hal ini:</p>
<ul>
   <li>Lakukan inisialisasi objek kelas <a href="https://apireference.aspose.com/diagram/net/aspose.diagram">Diagram</a> untuk memuat file input Visio yang akan dikonversi.</li>
   <li>Buat instance objek kelas <a href="https://reference.aspose.com/diagram/net/aspose.diagram.saving/pdfsaveoptions/">PdfSaveOptions</a>.</li>
   <li>Tetapkan properti file seperti jumlah halaman dan indeks halaman.</li>
   <li>Simpan file keluaran sebagai PDF.</li>
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
   <p class="col-lg-12">Lebih banyak contoh kerja Aspose.Diagram untuk .NET API tersedia di <a href="https://github.com/aspose-diagram/Aspose.Diagram-for-.NET/tree/master/Examples">Contoh GitHub </a> halaman. Kami menawarkan <a href="https://products.aspose.app/diagram/family/">aplikasi online gratis</a> Aspose.Diagram untuk mengedit, melihat, mengonversi, menggabungkan, menandai air, memisahkan, dan mengompres Microsoft File diagram Visio dengan cepat menggunakan perangkat seluler atau desktop Anda. Silakan mencoba aplikasi online untuk memanipulasi diagram Visio dari mana saja.</p>
{{< products/product-feature-blocks
featureheading="Memanipulasi dan mencetak file Visio secara mandiri"
featuretext="Aspose.Diagram untuk .NET API memungkinkan mengakses dan membaca data dari file Microsoft Visio, memprosesnya, dan mencetak file yang diproses dalam kualitas tinggi dengan beberapa opsi pencetakan, menggunakan pengkodean minimum. Anda tidak perlu menginstal Microsoft Office atau Microsoft Visio saat memproses file diagram Visio dengan Aspose.Diagram untuk .NET, memberi Anda pengalaman pengguna yang independen."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
   >}}
   {{< products/faq-block
   faqquery="1. Bagaimana cara mengonversi Diagram Microsoft Visio di .NET?"
   faqanswer="Konversi diagram Visio di .NET cepat dan mudah menggunakan Aspose.Diagram untuk .NET API. Hanya beberapa baris kode .NET yang diperlukan untuk mengonversi file VSD, VSDX, VSX, VTX, VDX, VSDM, dan file diagram lainnya ke format file yang berbeda."
   >}}
   {{< products/faq-block
   faqquery="2. Berapa lama waktu yang diperlukan untuk mengonversi atau memproses diagram Visio?"
   faqanswer="API diagram .NET bekerja dengan cepat dan menyelesaikan permintaan konversi diagram Anda dalam waktu singkat."
   >}}
   {{< products/faq-block
   faqquery="3. Apakah aman untuk memproses diagram Visio menggunakan .NET API?"
   faqanswer="Anda dapat memastikan keamanan file diagram Anda saat memprosesnya menggunakan Aspose.Diagram untuk .NET API. Kami memastikan privasi data Anda dan mengambil semua tindakan yang diperlukan untuk memberi Anda pengalaman pengguna yang aman."
   >}}
   {{< products/faq-block
   faqquery="4. Bisakah saya memproses diagram MS Visio di Mac OS, Windows, atau Linux?"
   faqanswer="Ya, diagram API untuk .NET berfungsi di berbagai OS, kerangka kerja, dan lingkungan operasi. Anda dapat menggunakannya pada platform pilihan Anda dan tidak memerlukan penginstalan perangkat lunak tambahan untuk berfungsi."
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Alat Manipulasi Diagram Visio"
>}}
   {{< products/popularapp-anchor
anchorlink="VSD ke VSSX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-vssx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX ke VSTM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-vstm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX ke VSDX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-vsdx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM menjadi VSSM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-vssm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD ke TIFF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-tiff/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX ke BMP"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-bmp/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM ke JPEG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX ke PNG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-png/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD ke PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX ke PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSX ke PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsx-to-pdf/"
>}}  
   {{< products/popularapp-anchor
anchorlink="VSTM ke PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vstm-to-pdf/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Mencari bantuan?"
bartext="Lihat saluran dukungan kami untuk mendapatkan bantuan terkait pertanyaan Anda terkait fitur dan cara kerja API produk Aspose."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/diagram/net/"
resourcetxt2="Referensi API"
resourcelinks2="https://reference.aspose.com/diagram/" 
resourcetxt3="Dasar pengetahuan"
resourcelinks3="https://kb.aspose.com/diagram/net/"
resourcetxt4="Dukungan Gratis"
resourcelinks4="https://forum.aspose.com/c/diagram/17"
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
resourcelistlink="https://blog.aspose.com/diagram/convert-image-to-visio-in-csharp/"
resourcelistlink2="https://blog.aspose.com/diagram/create-org-chart-csharp/"
resourcelistlink3="https://blog.aspose.com/diagram/find-replace-visio-text-csharp/"
resourcelisttext="Konversi Gambar ke Visio di C#"
resourcelisttext2="Buat Bagan ORG Secara Terprogram di C#"
resourcelisttext3="Temukan dan Ganti Teks di File Visio di C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Dokumentasi"
resourcealt="Dokumentasi"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/diagram/net/feature-list/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Diagram/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Diagram untuk Fitur .NET"
resourcelisttext2="Instal Aspose.Diagram untuk Paket .NET NuGet"
resourcelisttext3="Aspose.Diagram untuk Helpdesk Dukungan Berbayar .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Dasar pengetahuan"
resourcealt="Contoh Kode"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/diagram/net/how-to-add-comment-to-visio-drawings-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/diagram/net/how-to-merge-visio-files-in-csharp/"
resourcelistlink3="https://kb.aspose.com/diagram/net/how-to-convert-vsx-to-html-in-c-sharp/"
resourcelisttext="Cara Menambahkan Komentar ke Gambar Visio di C#"
resourcelisttext2="Cara Menggabungkan File Visio di C#"
resourcelisttext3="Cara Mengonversi VSX ke HTML di C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Siap untuk memulai?"
rtstext="Unduh Uji Coba Gratis"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Lihat Semua API"
>}}

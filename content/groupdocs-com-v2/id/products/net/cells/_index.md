---
title: API pemrosesan format file spreadsheet Excel untuk C# .NET
description: Pustaka .NET Excel yang andal untuk membuat, melihat, dan memproses spreadsheet Excel dalam C#, ASP.NET, dan VB.NET. Konversi Excel ke PDF, JPEG, HTML & format lainnya.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API pemrosesan format file spreadsheet Excel untuk C# .NET"
  inheadertext="Muat, render, dan manipulasi format file XLS, XLSX, XLSM, XLT, ODS, CSV, dan Microsoft Excel lainnya pada platform .NET Core, dan Xamarin. Bangun aplikasi pengolah spreadsheet di ASP.NET dan VB.NET untuk mengonversi Excel ke PDF, Excel ke JPG, dan banyak format lainnya."
  ctabtn="Unduh Uji Coba Gratis"
  ctabtn="Unduh Uji Coba Gratis"
  ctalink="https://releases.aspose.com/cells/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Lihat Semua API"
  bchomelink="/"
  bchome="Rumah"
  bcpage="Sel"
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
subnav5="https://purchase.aspose.com/pricing/cells/net" 
subnavtxt5="Harga" 
subbtn1="https://docs.aspose.com/cells/net/" 
subbtntxt1="Mempelajari"
subbtn2="https://purchase.aspose.com/buy" 
subbtntxt2="Membeli"
>}}
   {{< products/subtext-wrapper 
   sectionid="overview"
   subtitle="Pemrosesan spreadsheet Excel berkinerja tinggi di .NET"
   subtext="Aspose.Cells untuk .NET adalah perpustakaan yang andal dan kaya fitur yang memungkinkan pengembang .NET membuat, memuat, merender, dan mengekspor file spreadsheet Excel dalam aplikasi C#, ASP.NET, dan VB.NET. Dengan menggunakan pustaka ini, Anda dapat membaca, melihat, mengedit, dan menulis lembar Excel dan melakukan tugas tingkat lanjut seperti menghitung rumus, mengelola bagan dan tabel pivot, serta memformat teks dalam spreadsheet. Selain itu, Anda juga dapat bekerja dengan fitur seperti mengelola baris, kolom, dan sel lembar kerja, menerapkan pemformatan bersyarat, memanipulasi aturan validasi data, rentang bernama, dan banyak lagi. Aspose.Cells untuk .NET API mendukung berbagai format file terkenal seperti XLS, XLT, XLSM, XLSX, XLTX, XLTM, ODS, CSV, TSV, dan HTML." 
   subtext2="Tidak ada ketergantungan pada Microsoft Excel atau perangkat lunak eksternal apa pun saat menggunakan Aspose.Cells untuk .NET, memungkinkan pengguna menikmati pengalaman manipulasi spreadsheet lintas platform yang sepenuhnya independen. Pengembang dapat membuat aplikasi konversi file Excel yang cerdas untuk mengonversi Excel ke PDF, Excel ke JPG, Excel ke HTML, dan jenis file lainnya dengan sempurna menggunakan API pemrosesan spreadsheet ini untuk C# .NET."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Mulai</h2>
   <p>Periksa informasi berikut untuk menyiapkan dan menggunakan Aspose.Cells untuk .NET API dengan benar. Lihat juga halaman <a href="https://docs.aspose.com/cells/net/system-requirements/">Persyaratan Sistem</a> untuk mengetahui daftar prasyarat agar berhasil menyiapkan Excel Documents API untuk .NET</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper 
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Cells untuk Instalasi .NET"
>}}
<p>Untuk menyiapkan Aspose.Cells untuk .NET di sistem Anda, unduh langsung DLL atau Pemasang MSI dari <a href="https://releases.aspose.com/cells/net/">bagian unduhan</a >. Atau, Anda dapat menggunakan <a href="https://www.nuget.org/packages/Aspose.Cells/">paket NuGet</a> untuk penginstalan API pemrosesan spreadsheet .NET. Perintah manajer paket diberikan di bawah ini.</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM> Install-Package Aspose.Cells
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Cara Mengonversi Excel ke PDF di .NET dan Menggabungkan Buku Kerja Excel dengan Cepat"
featuretext="Aspose.Cells untuk .NET API memungkinkan pengembang .NET dengan mahir mengonversi buku kerja Microsoft Excel ke format file yang berbeda. Mengonversi Excel ke PDF mudah menggunakan .NET Excel API yang memungkinkan Anda mengonversi XLS ke PDF dan XLSX ke PDF dalam aplikasi konversi file .NET Anda. Selain itu, Anda dapat menggabungkan buku kerja Excel dan menyimpan dokumen yang diproses sebagai file terpadu dengan bantuan API pemrosesan spreadsheet .NET."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Konversikan Excel ke PDF di .NET"
>}}
<p>Mutakhirkan aplikasi konverter file .NET Anda dengan mengintegrasikan fungsi konversi Excel ke PDF menggunakan Aspose.Cells untuk pustaka .NET. Mengonversi file XLS dan XLSX ke format PDF dengan mudah menggunakan jumlah kode minimum. Silakan merujuk ke informasi berikut dan contoh pengkodean untuk mengonversi Excel ke PDF di platform .NET:</p>
<ul>
   <li>Buat instance kelas <a href="https://reference.aspose.com/net/cells/aspose.cells/workbook">Buku Kerja</a> dan tambahkan dokumen Excel yang ingin Anda konversi.</li>
   <li>Simpan dokumen Excel ke format PDF menggunakan metode <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/save/#save_3">Simpan</a>. Tentukan format PDF menggunakan Enumerasi <a href="https://reference.aspose.com/net/cells/aspose.cells/saveformat">SaveFormat</a>.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Instantiate the Workbook object with the Excel file
Workbook workbook = new Workbook("SampleExcel.xls");
// Save the document in PDF format
workbook.Save("outputPDF.pdf", SaveFormat.Pdf);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col 
featurecolheading="Gabungkan Buku Kerja MS Excel di .NET"
>}}
<p>Menggabungkan beberapa buku kerja Excel secara terprogram dan menggabungkannya menjadi satu file Excel dengan bantuan Aspose.Cells untuk .NET API. Tingkatkan aplikasi penggabungan dokumen .NET Anda dengan menyuntikkan fungsionalitas penggabungan buku kerja MS Excel. Harap tinjau cuplikan kode yang diberikan di bawah ini dan informasi untuk menggabungkan beberapa buku kerja:</p>
<ul>
   <li>Buat dua instance kelas <a href="https://reference.aspose.com/net/cells/aspose.cells/workbook">Buku Kerja</a>, masing-masing untuk menggabungkan dua buku kerja.</li>
   <li>Gabungkan kedua buku kerja menggunakan metode <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/combine/">Gabungkan</a></li>
   <li>Simpan gabungan buku kerja Excel menggunakan metode <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/save#save_2">Simpan</a>.</li>
</ul>
{{< products/product-feature-blocks-snip 
snipclass="greysnipp" 
copyID="snipp3"
>}}
// Define the first source workbook
// Open the first excel file.
Workbook SourceBook1 = new Workbook(dataDir+ "SampleChart.xlsx");
// Define the second source workbook.
// Open the second excel file.
Workbook SourceBook2 = new Workbook(dataDir+ "SampleImage.xlsx");
// Combine the two workbooks
SourceBook1.Combine(SourceBook2);
// Save the target book file.
SourceBook1.Save("Combined.out.xlsx");
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Untuk memeriksa lebih banyak contoh kerja Aspose.Cells untuk .NET API, silakan kunjungi <a href="https://github.com/aspose-cells/Aspose.Cells-for-.NET/tree/master/Examples"> halaman contoh GitHub</a>. Anda dapat melihat, mengedit, mengonversi, menggabungkan, membagi, membuat anotasi, memberi tanda air, mengurai, membandingkan, mengompres, atau mencari dokumen Excel dari mana saja menggunakan perangkat seluler Anda. Periksa <a href="https://products.aspose.app/cells/family">Aplikasi Online Gratis Aspose.Cells</a> untuk manipulasi spreadsheet Excel langsung.</p>
{{< products/product-feature-blocks
featureheading="Kontrol GUI dan perhitungan rumus lanjutan di .NET"
featuretext="Hasilkan spreadsheet yang tampak profesional dengan cepat lengkap dengan tabel pivot dan bagan menggunakan kontrol GUI yang ditawarkan oleh Aspose.Cells untuk .NET API. Bantu diri Anda sendiri membuat aplikasi spreadsheet Excel berbasis web dan desktop interaktif tanpa perlu pengkodean ekstensif. Di atas fitur Antarmuka Grafis, perpustakaan pemrosesan spreadsheet .NET ini mendukung banyak fungsi standar dan lanjutan, operator, dan sistem perhitungan formula komprehensif yang mampu menangani formula kompleks."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper 
   faqtitle="FAQ"
>}}
   {{< products/faq-block
   faqquery="1. Bagaimana cara mengonversi dokumen Excel di .NET?"
   faqanswer="Konversi dokumen Microsoft Excel di .NET cepat dan mudah menggunakan Aspose.Cells untuk .NET API. Anda dapat mengonversi spreadsheet Microsoft Excel dalam .NET ke berbagai format file menggunakan pengkodean minimum."
>}}
   {{< products/faq-block
   faqquery="2. Berapa lama waktu yang diperlukan untuk mengonversi atau memproses spreadsheet Excel?"
   faqanswer=".NET spreadsheet API menawarkan kecepatan pemrosesan secepat kilat dan melakukan konversi dan pemrosesan dokumen dengan sangat cepat."
>}}
   {{< products/faq-block
   faqquery="3. Apakah aman untuk memproses dokumen MS Excel menggunakan API pemrosesan spreadsheet .NET?"
   faqanswer="Tentu saja! Anda dapat yakin tentang keamanan dokumen Anda saat memprosesnya menggunakan Aspose.Cells untuk .NET API. Kami memastikan privasi data Anda dan mengambil semua tindakan yang diperlukan untuk memberi Anda pengalaman pengguna yang aman."
>}}
   {{< products/faq-block
   faqquery="4. Bisakah saya memproses dokumen Microsoft Excel di Mac OS, Windows, atau Linux?"
   faqanswer="Ya, .NET API berfungsi di berbagai OS, kerangka kerja, dan lingkungan operasi. Anda dapat menggunakannya di platform pilihan Anda. Pustaka pemrosesan dokumen .NET Excel tidak memerlukan penginstalan perangkat lunak tambahan untuk berfungsi."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Alat Manipulasi Spreadsheet Excel"
>}}
   {{< products/popularapp-anchor
anchorlink="Excel ke PDF"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel ke JPG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-jpg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel ke PNG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-png/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel ke HTML"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-html/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel ke ODS"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-ods/"
>}} 
   {{< products/popularapp-anchor
anchorlink="XLSX ke CSV"
moreproducts="https://products.aspose.com/cells/net/conversion/xlsx-to-csv/"
>}} 
   {{< products/popularapp-anchor
anchorlink="XLSX ke XPS"
moreproducts="https://products.aspose.com/cells/net/conversion/xlsx-to-xps/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel ke JSON"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-json/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Unggul ke SVG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-svg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Unggul ke TSV"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-tsv/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel ke MD"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-md/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel ke TXT"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-txt/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Mencari bantuan?"
bartext="Lihat saluran dukungan kami untuk mendapatkan bantuan terkait pertanyaan Anda terkait fitur dan cara kerja API produk Aspose."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/cells/net/"
resourcetxt2="Referensi API"
resourcelinks2="https://reference.aspose.com/cells/" 
resourcetxt3="Dasar pengetahuan"
resourcelinks3="https://kb.aspose.com/cells/net/"
resourcetxt4="Dukungan Gratis"
resourcelinks4="https://forum.aspose.com/c/cells/9"
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
resourcelistlink="https://blog.aspose.com/cells/convert-csv-to-json-csharp/"
resourcelistlink2="https://blog.aspose.com/cells/adjust-row-height-column-width-in-excel-csharp/"
resourcelistlink3="https://blog.aspose.com/cells/excel-to-csv-csharp/"
resourcelisttext="Konversikan CSV ke JSON di C#"
resourcelisttext2="Sesuaikan Tinggi Baris dan Lebar Kolom di Excel"
resourcelisttext3="Konversi Excel XLS XLSX ke CSV di C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Dokumentasi"
resourcealt="Dokumentasi"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/cells/net/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Cells/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Cells untuk .NET Docs"
resourcelisttext2="Instal Aspose.Cells untuk Paket .NET NuGet"
resourcelisttext3="Aspose.Cells untuk Helpdesk Dukungan Berbayar .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Dasar pengetahuan"
resourcealt="Contoh Kode"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/cells/net/how-to-insert-comment-in-excel-using-csharp/"
resourcelistlink2="https://kb.aspose.com/cells/net/how-to-create-pivot-table-in-excel-using-csharp/"
resourcelistlink3="https://kb.aspose.com/cells/net/how-to-rotate-a-cell-in-excel-using-csharp/"
resourcelisttext="Cara Menyisipkan Komentar di Excel menggunakan C#"
resourcelisttext2="Cara Membuat Tabel Pivot di Excel Menggunakan C#"
resourcelisttext3="Cara Memutar Sel di Excel menggunakan C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Siap untuk memulai?"
rtstext="Unduh Uji Coba Gratis"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Lihat Semua API"
>}}

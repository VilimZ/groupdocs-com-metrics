---
title: API OCR yang kuat untuk .NET untuk Melakukan Pengenalan Teks yang Tepat
description: Gunakan Aspose Optical Character Recognition (OCR) API untuk .NET untuk mengenali & mengekstrak teks dari gambar secara akurat, mengonversi gambar dan PDF menjadi teks, dan banyak lagi.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API .NET OCR yang kuat untuk Melakukan Pengenalan Teks"
  inheadertext="Integrasikan kemampuan OCR tingkat lanjut ke dalam aplikasi Anda dengan Aspose Optical Character Recognition API for .NET. Kenali dan ekstrak teks dengan mulus dari gambar PNG, JPG, GIF, dan BMP, foto yang dipindai, dan PDF, atau konversi gambar atau PDF menjadi teks."
  ctabtn="Unduh Uji Coba Gratis"
  ctabtn="Unduh Uji Coba Gratis"
  ctalink="https://releases.aspose.com/ocr/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Lihat Semua API"
  bchomelink="/"
  bchome="Rumah"
  bcpage="OCR"
  bclink2="Produk"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview" subnavtxt1="Ringkasan" 
subnav2="#features" subnavtxt2="Fitur" 
subnav3="#support" subnavtxt3="Mendukung" 
subnav4="#examples" subnavtxt4="Contoh" 
subnav5="https://purchase.aspose.com/pricing/ocr/net"
subnavtxt5="Harga" 
subbtn1="https://docs.aspose.com/ocr/net/"
subbtntxt1="Mempelajari"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Membeli"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Mesin .NET OCR dengan Kecepatan dan Akurasi Unggul"
   subtext="Aspose.OCR untuk .NET adalah API pengenalan karakter optik yang canggih, efisien, dan akurat untuk mengenali teks dalam gambar dan PDF dengan mudah. Ini membantu mengembangkan fungsionalitas OCR untuk aplikasi .NET dan menawarkan kecepatan pemrosesan yang ditingkatkan, akurasi, dan serangkaian fitur yang komprehensif. Mesin .NET OCR yang andal memungkinkan Anda melakukan pengenalan dan ekstraksi teks yang tepat dari file PDF dan gambar JPEG, GIF, PNG, TIFF, dan BMP. Anda dapat membangun solusi otomatis untuk mengonversi gambar dan dokumen PDF ke format teks, Word, Excel, XML, dan JSON dengan bantuan API OCR untuk .NET."
   subtext2="Pengembang dapat menikmati pengalaman ekstraksi teks lintas platform menggunakan Aspose.OCR untuk .NET API, karena dapat bekerja secara identik di lingkungan berbasis Windows, Mac OS, dan Linux. API mendukung 27 bahasa berbeda dalam skrip Latin dan Cyrillic dan ribuan karakter Cina dan memungkinkan pendeteksian dan pengenalan tipografi terkenal. Selain itu, Anda dapat mengenali teks dari foto yang dipindai dengan kemampuan bawaan untuk memproses gambar yang berisik, miring, atau diputar. Aspose.OCR untuk perpustakaan .NET adalah analisis gambar lengkap dan solusi ekstraksi teks yang dapat menambah aplikasi Anda yang sudah ada atau membantu Anda membuat solusi OCR profesional dari awal."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Mulai</h2>
   <p>Untuk menyiapkan dan menggunakan .NET OCR API dengan benar, periksa detail yang diberikan di bawah ini. Disarankan untuk merujuk ke daftar prasyarat di halaman <a href="https://docs.aspose.com/ocr/net/system-requirements/">Persyaratan Sistem</a> untuk kelancaran pemasangan API pengenalan karakter optik untuk .NET.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.OCR untuk Instalasi .NET"
>}}
<p>Anda dapat menginstal pustaka OCR untuk C# .NET dengan mengunduh penginstal MSI atau DLL dari <a href="https://releases.aspose.com/ocr/net/">bagian unduhan</a>. Atau, Anda dapat menggunakan <a href="https://www.nuget.org/packages/Aspose.OCR/">paket NuGet</a> untuk menyiapkannya. Perintah untuk konsol manajer paket Visual Studio disediakan di bawah ini:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.OCR
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Lakukan OCR secara efisien pada Dokumen PDF dan Konversi Gambar menjadi Teks"
featuretext="Aspose.OCR untuk .NET API adalah pilihan yang sangat baik untuk melakukan pengenalan karakter optik (OCR) dengan mulus untuk pengembang .NET. Menerapkan OCR ke dokumen PDF dan mengonversi teks yang dikenali ke format Word hanya memerlukan beberapa baris kode. Demikian pula, Anda dapat membuat solusi konverter gambar ke teks menggunakan pustaka pengenalan teks untuk C# .NET."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Kenali dan ekstrak teks dari dokumen PDF di .NET"
>}}
<p>Pengenalan karakter optik untuk dokumen PDF yang dipindai dibuat sederhana dengan bantuan Aspose.OCR untuk .NET. Ini adalah salah satu fitur yang paling disukai dari API OCR dokumen .NET PDF dan melengkapi siapa pun yang bekerja dengan API dengan semua alat yang diperlukan untuk mengenali, mengekstrak, dan mengonversi teks dari dokumen PDF ke berbagai format. Mari kita lihat langkah-langkah yang diperlukan untuk melakukan OCR pada dokumen PDF dan mengonversi teks yang diekstraksi dari format PDF ke Word:</p>
<ul>
   <li>Buat instance kelas <strong>AsposeOcr</strong>.</a></li>
   <li>Buat objek dari kelas <strong>DocumentRecognitionSettings</strong>.</li>
   <li>Tentukan bahasa OCR.</li>
   <li>Panggil metode <strong>RecognizePdf()</strong> untuk mendapatkan <strong>RecognitionResult</strong>. Tambahkan jalur file dan objek <strong>DocumentRecognitionSettings</strong> sebagai argumen.</li>
   <li>Simpan teks menggunakan metode <strong>SaveMultipageDocument()</strong>. Tambahkan jalur file keluaran, objek <strong>SaveFormat</strong>, dan <strong>RecognitionResult</strong> sebagai argumen</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// This code example demonstrates how to OCR PDF documents and save the recognized text as DOCX.
// Initialize the PCR engine
AsposeOcr recognitionEngine = new AsposeOcr();
// Initialize recognition settings
DocumentRecognitionSettings recognitionSettings = new DocumentRecognitionSettings();
// Specify language for OCR. Multi-language by default
recognitionSettings.Language = Language.Eng;
// Recognize text from PDF
List<RecognitionResult> results = recognitionEngine.RecognizePdf("C:\\MyFiles\\test.pdf", recognitionSettings);
// Save the recognized text as Word (DOCX) file
AsposeOcr.SaveMultipageDocument("C:\\Files\\OCR_result.docx", SaveFormat.Docx, results);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Mengonversi Gambar dengan Mudah ke PDF yang Dapat Ditelusuri di .NET"
>}}
<p>.NET OCR API berperforma tinggi memungkinkan pengembang untuk mengekstrak teks yang dapat dicari dari gambar dan foto yang dipindai dari berbagai format gambar yang umum digunakan seperti GIF, PNG, JPG, BMP, dan TIFF. Jika Anda ingin mengintegrasikan kemampuan OCR ke dalam aplikasi .NET Anda, fitur konversi gambar ke teks dapat mendukungnya. Di sini, kami akan meninjau langkah-langkah yang diperlukan untuk mengonversi JPG ke PDF secara efisien menggunakan OCR API yang tangguh untuk .NET:</p>
<ul>
   <li>Tetapkan jalur file gambar input untuk pengenalan teks.</li>
   <li>Buat instance kelas <strong>AsposeOcr</strong></li>
   <li>Gunakan metode <strong>RecognizeImage</strong> untuk mengenali teks dalam file gambar yang Anda pilih.</li>
   <li>Simpan file yang diproses menggunakan metode <strong>Save</strong>, dan tambahkan nama file keluaran dan <strong>SaveFormat</strong> sebagai argumen.</li>
   <li>Pastikan untuk menyetel file yang dihasilkan ke dokumen PDF yang dapat ditelusuri menggunakan <strong>SaveFormat</strong>.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Set path for input image to recognize
string image = "OCR_test.jpg";
// Initialize AsposeOcr class instance
AsposeOcr api = new AsposeOcr();
// Recognize input image with RecognizeImage method
RecognitionResult result = api.RecognizeImage(image, new RecognitionSettings());
// Save output to searchable PDF file
result.Save("OCR_output.pdf", SaveFormat.Pdf);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">GitHub <a href="https://github.com/aspose-ocr/Aspose.OCR-for-.NET/tree/master/Examples">halaman contoh</a> Aspose Optical Character Recognition API untuk . NET menyertakan lebih banyak contoh kode yang berfungsi, jangan ragu untuk memeriksanya. Kami juga menyediakan <a href="https://products.aspose.app/ocr/family">OCR PDF Online Gratis dan Konverter Gambar ke Teks</a>, pengenalan teks, dan ekstrak aplikasi. Anda dapat menggunakan aplikasi OCR gratis ini dengan cepat menggunakan perangkat seluler Anda.</p>
{{< products/product-feature-blocks
featureheading="Pustaka .NET OCR yang mudah digunakan untuk Ekstraksi Teks di Foto"
featuretext="Apakah Anda mengalami kesulitan membaca dan mengekstraksi teks dari gambar yang dipindai? Jika ya, gunakan Aspose.OCR untuk .NET, karena ini adalah API OCR terbaik untuk analisis gambar dan ekstraksi teks dari foto yang dipindai, gambar ponsel cerdas, dan lainnya. Dengan menggunakan API ini, Anda dapat secara terprogram mengenali teks dalam gambar dan mengubahnya menjadi format file yang berbeda. Selain itu, API konversi gambar ke teks menyertakan fungsi lanjutan seperti pemeriksaan ejaan dan penggantian karakter untuk teks yang rusak secara visual. Itu dapat dengan mudah membaca teks seperti itu, memeriksa ejaannya, dan mengganti karakter yang terdistorsi dari teks yang salah eja pada gambar. Saat menjalankan OCR gambar, Anda dapat memberikan tautan ke file gambar sebagai sumber. Dimungkinkan untuk memindai dan mengenali teks dari gambar lengkap atau hanya bagian tertentu dari gambar untuk proses ini. Secara mahir mengembangkan aplikasi pengonversi gambar ke teks berfitur lengkap menggunakan .NET image OCR API dan dengan mudah mengonversi JPEG ke teks, PNG ke teks, BMP ke teks, dan banyak lagi."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Bagaimana cara mengonversi gambar menjadi teks di .NET?"
 faqanswer="Mengonversi gambar menjadi teks di .NET cepat dan mudah menggunakan .NET OCR API. Hanya beberapa baris pengkodean .NET yang diperlukan untuk mengonversi JPG, BMP, GIF, PNG, TIFF, dan file gambar lainnya ke format PDF, Word, Excel, JSON, Teks Biasa, dan XML."
>}}
   {{< products/faq-block 
 faqquery="2. Berapa lama untuk mengonversi file gambar atau PDF menjadi teks?"
 faqanswer="API OCR terbaik untuk .NET bekerja dengan cepat dan menyelesaikan permintaan pengenalan teks, ekstraksi, dan konversi Anda dalam waktu singkat."
>}}
   {{< products/faq-block
 faqquery="3. Apakah aman memproses gambar dan PDF yang dipindai menggunakan .NET API?"
 faqanswer="Anda dapat yakin akan keamanan file data Anda saat memprosesnya menggunakan API pengenalan karakter optik untuk .NET. Kami memastikan privasi data Anda dan mengambil semua tindakan yang diperlukan untuk memberi Anda pengalaman pengguna yang aman."
>}}
   {{< products/faq-block
 faqquery="4. Bisakah saya memproses file foto dan PDF di Mac OS, Windows, atau Linux?"
 faqanswer="Ya, pengenalan teks dan API konversi gambar ke teks untuk .NET berfungsi di berbagai OS, kerangka kerja, dan lingkungan operasi. Anda dapat menggunakannya pada platform pilihan Anda dan tidak memerlukan penginstalan perangkat lunak tambahan untuk berfungsi."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper popularheading="Alat Pengenalan Karakter Optik"
>}}
   {{< products/popularapp-anchor
 anchorlink="JPEG ke TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG ke TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF ke TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP ke TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="TIFF ke TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/tiff-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG ke PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-pdf"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG ke Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-docx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG ke Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-xlsx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG ke XML"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-xml"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG ke Kata"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-docx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG ke Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-xls"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PNG ke PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-pdf"
>}}  
   {{< products/popularapp-anchor
 anchorlink="GIF ke Kata"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-doc"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF ke PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-pdf"
>}}
   {{< products/popularapp-anchor
 anchorlink="BMP ke Kata"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-docx"
>}}
   {{< products/popularapp-anchor
 anchorlink="BMP ke Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-xls"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Mencari bantuan?"
bartext="Lihat saluran dukungan kami untuk mendapatkan bantuan terkait pertanyaan Anda terkait fitur dan cara kerja API produk Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/ocr/net/"
 resourcetxt2="Referensi API"
 resourcelinks2="https://reference.aspose.com/ocr/net/" 
 resourcetxt3="Dasar pengetahuan"
 resourcelinks3="https://kb.aspose.com/ocr/net/"
 resourcetxt4="Dukungan Gratis"
 resourcelinks4="https://forum.aspose.com/c/ocr/16"
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
 resourcelistlink="https://blog.aspose.com/ocr/skew-correction-in-image-processing-using-csharp/"
 resourcelistlink2="https://blog.aspose.com/ocr/convert-screenshot-to-text-with-ocr-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/ocr/image-to-excel-ocr-csharp/"
 resourcelisttext="Koreksi Miring dalam Pemrosesan Gambar menggunakan C#"
 resourcelisttext2="Ubah Tangkapan Layar menjadi Teks dengan OCR di C#"
 resourcelisttext3="Konversi Gambar ke Excel dengan OCR di C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentasi"
 resourcealt="Dokumentasi"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/ocr/net/how-to-run-the-examples/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.OCR/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Cara Menjalankan Contoh"
 resourcelisttext2="Instal Aspose.OCR untuk Paket .NET NuGet"
 resourcelisttext3="Aspose.OCR untuk Helpdesk Dukungan Berbayar .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Dasar pengetahuan"
 resourcealt="Contoh Kode"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/ocr/net/how-to-extract-text-from-scanned-pdf-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/ocr/net/how-to-extract-text-from-image-in-csharp/"
 resourcelisttext="Cara Mengekstrak Teks dari PDF yang Dipindai di C#"
resourcelisttext2="Cara Mengekstrak Teks dari Gambar di C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Siap untuk memulai?"
rtstext="Unduh Uji Coba Gratis"
rtslink="https://releases.aspose.com/ocr/net/" 
rtslink2="https://products.aspose.com" 
rtstext2="Lihat Semua API"
>}}

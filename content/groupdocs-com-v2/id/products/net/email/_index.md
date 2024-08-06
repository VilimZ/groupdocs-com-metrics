---
title: .NET Email Processing API untuk memanipulasi file email Outlook
description: Pustaka pemrosesan email terkemuka untuk .NET untuk mengelola format file Thunderbird dan Outlook termasuk MSG, EML, & MBOX melalui protokol SMPT, POP3, dan IMAP.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Email Processing API untuk memanipulasi file email Outlook"
  inheadertext="Sederhanakan proses manipulasi file email Microsoft Outlook dan Mozilla Thunderbird di aplikasi C#, ASP.NET, dan VB.NET Anda. Bekerja dengan format file MSG, EML, PST, OST, MBOX, VCF, dan HTML. Secara terprogram mengelola pesan email dan lampiran melalui POP3, SMTP, IMAP, atau Microsoft Exchange Server."
  ctabtn="Unduh Uji Coba Gratis"
  ctabtn="Unduh Uji Coba Gratis"
  ctalink="https://releases.aspose.com/email/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Lihat Semua API"
  bchomelink="/"
  bchome="Rumah"
  bcpage="Surel"
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
subnav5="https://purchase.aspose.com/pricing/email/net"
subnavtxt5="Harga" 
subbtn1="https://docs.aspose.com/email/net/"
subbtntxt1="Mempelajari"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Membeli"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="API Email .NET yang komprehensif untuk memanipulasi dan memproses pesan email"
   subtext="Aspose.Email untuk .NET adalah API pemrosesan email yang fleksibel, kuat, dan mudah digunakan yang memungkinkan pengguna untuk membuat, memodifikasi, dan mengurai format file email populer seperti MSG, PST, OST, EML, EMLX, MBOX, juga sebagai VCF, HTML, dan MHTML di platform .NET. Ini memungkinkan pengguna untuk bekerja dengan format pesan email yang berbeda tanpa mengkhawatirkan masalah kompatibilitas format apa pun. Selain mengakses dan mengelola email Thunderbird dan Outlook, pengembang dapat menggunakan .NET Email API untuk memanipulasi lampiran email secara terprogram, menambah atau menghapus penerima, mengubah subjek pesan, dan melakukan lebih banyak lagi. "
   subtext2="Selain itu, kemampuan untuk mengonversi pesan email dari satu format ke format lain di C#, ASP.NET, dan VB.NET menjadikan API pemrosesan email .NET ini menonjol dalam penggunaan dan set fitur. Anda dapat dengan mudah mengirim dan menerima pesan email menggunakan protokol pilihan Anda antara POP3, SMTP, IMAP, atau terhubung ke Microsoft Exchange Server. Aspose.Email untuk .NET membantu Anda mengotomatiskan proses manajemen email secara efisien."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Mulai</h2>
   <p>Silakan periksa halaman <a href="https://docs.aspose.com/email/net/system-requirements/">Persyaratan Sistem</a> untuk prasyarat sebelum menyiapkan Aspose.Email untuk .NET di akhir Anda . Informasi berikut akan membantu Anda menyiapkan API email .NET dengan benar.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Email untuk Instalasi .NET"
>}}
<p>Untuk mengunduh DLL atau penginstal MSI, kunjungi <a href="https://releases.aspose.com/email/net/">bagian unduhan</a>. Atau, Anda dapat menggunakan <a href="https://www.nuget.org/packages/Aspose.Email/">paket NuGet</a> untuk pemasangan API. Perintah pengelola paket untuk menyiapkan API pemrosesan email .NET dibagikan di bawah ini:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
PM > Install-Package Aspose.Email
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Cara Mengonversi Email Outlook ke HTML dan Membuka Pesan Email Tanpa Outlook di .NET"
featuretext="Aspose.Email untuk .NET API memungkinkan konversi program MSG dan pesan EML ke format HTML. Ini juga mendukung akses dan pembukaan email Outlook dalam aplikasi .NET Anda tanpa memerlukan Microsoft Outlook."
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Konversi File MSG atau EML ke HTML di .NET"
>}}
<p>Ubah email Outlook dengan mulus ke format HTML dengan bantuan Aspose.Email untuk pustaka .NET. Anda dapat mengembangkan aplikasi pemrosesan email berfitur lengkap menggunakan .NET emailing API dan menggabungkan fungsionalitas konversi email untuk mengonversi format MSG atau EML ke HTML. Silakan lihat cuplikan kode dan informasi lain yang dibagikan di bawah ini untuk tujuan ini:</p>
<ul>
   <li>Buat instance objek kelas <a href="https://reference.aspose.com/email/net/aspose.email/mailmessage/">MailMessage</a> untuk mengakses file MSG atau EML sumber.</li>
   <li>Terapkan opsi penyimpanan HTML untuk file HTML keluaran.</li>
   <li>Simpan atau ekspor file MSG dalam format HTML menggunakan metode Simpan.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
string FilePath = @"/Users/EmailData/";
// Load the MSG or EML file
MailMessage srcEmlMessage = MailMessage.Load(FilePath + "Message.msg");
// Set the Html rendering options
HtmlSaveOptions HtmlOptions = SaveOptions.DefaultHtml;
HtmlOptions.ResourceRenderingMode= resourceRenderingMode.EmbedIntoHtml;
// Set the email message headers in  output HTML using the formatting options
HtmlOptions.HtmlFormatOptions = HtmlFormatOptions.WriteHeader |
				HtmlFormatOptions.WriteCompleteEmailAddress |
				HtmlFormatOptions.WriteCompleteFromEmailAddress;
// Convert and save the email to HTML format
srcEmlMessage.Save(FilePath + "Message.html", HtmlOptions);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Buka Email di .NET tanpa Outlook"
>}}
<p>Apakah Anda ingin membuka pesan Outlook di aplikasi pemrosesan email .NET tanpa menginstal Microsoft Outlook? Jika ya, Aspose.Email untuk .NET API adalah pilihan yang tepat untuk Anda. Ini memungkinkan pengembang .NET untuk mengakses dan membuka file email MSG dan mengambil informasi seperti subjek email, alamat pengirim, dan lampiran. Silakan periksa informasi berikut untuk mempelajari lebih lanjut:</p>
<ul>
   <li>Muat file email sumber MSG ke objek kelas <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessage/">MapiMessage</a>.</li>
   <li>Baca dan tampilkan berbagai properti file MSG.</li>
   <li>Parsing melalui <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessageitembase/attachments">lampiran</a> dan baca/tampilkan berbagai properti lampiran di MSG mengajukan.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Load the MSG file
MapiMessage mapiMsg = MapiMessage.Load("message.msg");
// Display email subject
Console.WriteLine("Subject:" + mapiMsg.Subject);
// Display sender address
Console.WriteLine("From:" + mapiMsg.SenderEmailAddress);
// Display email body
Console.WriteLine("Body" + mapiMsg.Body);
// Display recipients' information
Console.WriteLine("Recipient: " + mapiMsg.Recipients);
// Display email attachments
foreach (MapiAttachment att in mapiMsg.Attachments)
{
     Console.Write("File Name: " + att.FileName);
     Console.Write("Display Name: " + att.DisplayName);
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Untuk melihat lebih banyak contoh kerja dan contoh pengkodean Aspose.Email untuk .NET API, silakan kunjungi <a href="https://github.com/aspose-email/Aspose.Email-for-.NET/tree/master/">Contoh GitHub</a>. Kami juga menyediakan <a href="https://products.aspose.app/email/family">aplikasi online gratis</a> untuk Aspose.Email untuk membantu Anda mengonversi, membandingkan, melihat, menandai air, menggabungkan, mengedit, dan menandatangani file email Anda secara digital dengan cepat menggunakan perangkat seluler Anda.</p>
{{< products/product-feature-blocks
featureheading="Parsing email tanpa ketergantungan di .NET"
featuretext="Pengembang .NET yang bekerja dengan berbagai format file email dapat memanfaatkan fitur ekstensif Aspose.Email untuk .NET untuk membangun aplikasi pemrosesan email yang dimuat dengan kemampuan untuk mengurai dan menyimpan pesan email secara aman dan mandiri. Microsoft Automation atau perangkat lunak pihak ketiga lainnya tidak diperlukan karena API email .NET ini dibuat menggunakan kode terkelola."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Bagaimana cara mengonversi file email di .NET?"
 faqanswer="Mengonversi file email Microsoft Exchange atau Thunderbird di .NET cepat dan mudah menggunakan Aspose.Email untuk .NET API. Hanya beberapa baris pengkodean .NET yang diperlukan untuk mengonversi file MSG, PST, OST, EML, EMLX, MBOX, dan HTML ke format file yang berbeda."
>}}
   {{< products/faq-block 
 faqquery="2. Berapa lama waktu yang diperlukan untuk mengonversi atau memproses file email?"
 faqanswer="API .NET untuk memanipulasi dan memproses file email bekerja dengan cepat dan menyelesaikan permintaan konversi file email Anda dalam waktu singkat."
>}}
   {{< products/faq-block
 faqquery="3. Apakah aman memproses email menggunakan .NET API?"
 faqanswer="Anda dapat memastikan keamanan file pesan email Anda saat memprosesnya menggunakan Aspose.Email untuk .NET API. Kami memastikan privasi data Anda dan mengambil semua tindakan yang diperlukan untuk memberi Anda pengalaman pengguna yang aman."
>}}
   {{< products/faq-block
 faqquery="4. Bisakah saya memproses file email di Mac OS, Windows, atau Linux?"
 faqanswer="Ya, API pemrosesan email untuk .NET berfungsi di berbagai OS, kerangka kerja, dan lingkungan operasi. Anda dapat menggunakannya pada platform pilihan Anda dan tidak memerlukan penginstalan perangkat lunak tambahan untuk berfungsi."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Alat Manipulasi File Email"
   >}}
   {{< products/popularapp-anchor
 anchorlink="MSG ke PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG ke EML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-eml/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG ke HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG ke MBOX"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-mbox/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG ke PST"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pst/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG ke VCF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-vcf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML ke PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML ke HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML ke MSG"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-msg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MBOX ke XPS"
 moreproducts="https://products.aspose.com/email/net/conversion/mbox-to-xps/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="OST ke PST"
 moreproducts="https://products.aspose.com/email/net/conversion/ost-to-pst/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PST ke EML"
 moreproducts="https://products.aspose.com/email/net/conversion/pst-to-eml/"
 >}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Mencari bantuan?"
bartext="Lihat saluran dukungan kami untuk mendapatkan bantuan terkait pertanyaan Anda terkait fitur dan cara kerja API produk Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/email/net/"
 resourcetxt2="Referensi API"
 resourcelinks2="https://reference.aspose.com/email/" 
 resourcetxt3="Dasar pengetahuan"
 resourcelinks3="https://kb.aspose.com/email/net/"
 resourcetxt4="Dukungan Gratis"
 resourcelinks4="https://forum.aspose.com/c/email/12"  >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Sumber Daya sectionid=dukungan"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blog"
 resourcealt="Blog"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/email/create-mime-messages-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/email/merge-multiple-mbox-files-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/cells/send-excel-data-in-email-body-using-csharp-net/"
 resourcelisttext="Buat Pesan MIME di C# .NET"
 resourcelisttext2="Menggabungkan Banyak File MBOX dalam C#"
 resourcelisttext3="Kirim Data Excel di Badan Email menggunakan C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentasi"
 resourcealt="Dokumentasi"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/email/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Email/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Email untuk Fitur .NET"
 resourcelisttext2="Instal Aspose.Email untuk Paket .NET NuGet"
 resourcelisttext3="Aspose.Email untuk Helpdesk Dukungan Berbayar .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Dasar pengetahuan"
 resourcealt="Contoh Kode"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/email/net/how-to-send-email-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/email/net/how-to-create-a-pst-file-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/email/net/how-to-add-mapicalendar-to-pst-using-csharp/"
 resourcelisttext="Cara Mengirim Email di C#"
resourcelisttext2="Cara Membuat File PST di C#"
resourcelisttext3="Cara Menambahkan MapiCalendar ke PST menggunakan C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Siap untuk memulai?"
rtstext="Unduh Uji Coba Gratis"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Lihat Semua API"
>}}

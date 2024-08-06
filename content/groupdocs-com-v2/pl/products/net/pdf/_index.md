---
title: PDF API dla platformy .NET do przetwarzania, edytowania i konwertowania dokumentów PDF
description: Zaawansowana biblioteka .NET PDF do generowania i scalania dokumentów PDF. Konwertuj PDF na JPG, PDF na Excel i PDF na Word w aplikacjach C#, ASP.NET i VB.NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="PDF API dla platformy .NET do przetwarzania, edytowania i dokładnej konwersji dokumentów PDF"
  inheadertext="Korzystaj z zaawansowanych funkcji edycji, konwersji i analizowania plików PDF bez konieczności korzystania z programu Adobe Acrobat. Renderuj dokumenty PDF do formatów DOC, DOCX, PPTX, XLS, JPG, PNG, GIF, SVG i innych w swoich aplikacjach .NET."
  ctabtn="Pobierz darmową wersję próbną"
  ctabtn="Pobierz darmową wersję próbną"
  ctalink="https://releases.aspose.com/pdf/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Wyświetl wszystkie interfejsy API"
  bchomelink="/"
  bchome="Dom"
  bcpage="PDF"
  bclink2="Produkty"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Przegląd" 
subnav2="#features"
subnavtxt2="Cechy" 
subnav3="#support"
subnavtxt3="Wsparcie" 
subnav4="#examples"
subnavtxt4="Przykłady" 
subnav5="https://purchase.aspose.com/pricing/pdf/net"
subnavtxt5="cennik" 
subbtn1="https://docs.aspose.com/pdf/net/"
subbtntxt1="Uczyć się"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Kupić"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Przenieś przetwarzanie dokumentów PDF na wyższy poziom w C# .NET"
   subtext="Zaktualizuj swoje aplikacje do przetwarzania dokumentów .NET, integrując wszechstronne funkcje manipulacji plikami PDF za pomocą Aspose.PDF dla .NET. Ta natywna biblioteka jest wyposażona w doskonałe możliwości przetwarzania plików PDF, umożliwiając programistom .NET nie tylko generowanie, przetwarzanie, edytowanie i analizowanie plików PDF, ale także dokładną konwersję dokumentów PDF. Szybko i łatwo wstawiaj tekst, adnotacje i obrazy do dokumentów PDF, dodawaj lub usuwaj załączniki, znaki wodne i zakładki, dziel lub scalaj strony PDF oraz przetwarzaj pola formularzy w plikach PDF za pomocą tego interfejsu API PDF dla platformy .NET."
   subtext2="Oferując niezrównaną kompatybilność między platformami, Aspose.PDF dla .NET został zaprojektowany do bezproblemowego działania w wielu platformach, takich jak między innymi .NET Framework i .NET Core. Ponadto możesz użyć tego interfejsu API .NET PDF do tworzenia aplikacji konwertujących pliki PDF w językach C#, ASP.NET i VB.NET oraz konwertować pliki PDF na JPG, PDF na Excel, PDF na Word, PDF na PowerPoint i kilka innych formatów plików z wysoka wierność."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Rozpoczęcie pracy</h2>
   <p>Aby poprawnie skonfigurować i używać Aspose.PDF dla .NET API, sprawdź poniższe informacje. Zapoznaj się ze stroną <a href="https://docs.aspose.com/pdf/net/system-requirements/">Wymagania systemowe</a>, aby zapoznać się z listą wymagań wstępnych pomyślnego skonfigurowania interfejsu API PDF dla plików . INTERNET</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.PDF do instalacji platformy .NET"
>}}
<p>Aby skonfigurować Aspose.PDF dla .NET w swoim systemie, możesz pobrać biblioteki DLL lub instalator MSI bezpośrednio z <a href="https://releases.aspose.com/pdf/net/">sekcji pobierania</ a>. Alternatywnie możesz użyć <a href="https://www.nuget.org/packages/Aspose.PDF/">pakietu NuGet</a> do instalacji interfejsu API .NET PDF. Polecenie API menedżera pakietów podano poniżej.</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM> Install-Package Aspose.PDF
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Jak przekonwertować plik PDF na program Word w .NET i szybko scalić pliki PDF"
featuretext="Aspose.PDF dla .NET obsługuje szeroką gamę funkcji przetwarzania dokumentów, w tym konwersję plików PDF do formatu Word i innych oraz łączenie plików PDF w .NET. Korzystając z tej biblioteki .NET, możesz doświadczyć w pełni niezależnego przetwarzania dokumentów PDF bez polegania na oprogramowaniu innych firm."
>}}
{{< products/product-feature-blocks-col
 featurecolheading="Konwertuj PDF na Word w .NET"
>}}
<p>Uaktualnij swoje istniejące aplikacje do konwersji plików PDF .NET, integrując funkcję konwersji plików PDF do formatu Word. Aspose.PDF for .NET API pozwala konwertować pliki PDF na DOC i PDF na DOCX w aplikacjach do konwersji dokumentów .NET. Zapoznaj się z poniższymi instrukcjami i fragmentem kodu, aby pomóc sobie przekonwertować plik PDF na Word w .NET:</p>
<ul>
   <li>Utwórz instancję obiektu <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document/">Document</a> ze źródłowym dokumentem PDF.</li>
   <li>Zapisz go w formacie <strong>SaveFormat.Doc</strong>, wywołując metodę <strong>Document.Save()</strong>.</li>
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
 featurecolheading="Scal pliki PDF w .NET"
>}}
<p>Scalanie plików PDF jest obsługiwane przez Aspose.PDF dla .NET API. Zapoznaj się z poniższymi instrukcjami i fragmentem kodu, aby szybko i łatwo scalić pliki PDF w swoich aplikacjach C# .NET:</p>
<ul>
   <li>Utwórz dwa obiekty <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document">Document</a>, z których każdy zawiera jeden z wejściowych plików PDF.</li>
   <li>Następnie wywołaj metodę Add kolekcji <a href="https://reference.aspose.com/pdf/net/aspose.pdf/pagecollection">PageCollection</a> dla obiektu Document, do którego chcesz dodać inny plik PDF .</li>
   <li>Przekaż kolekcję PageCollection drugiego obiektu Document do metody Add pierwszej kolekcji PageCollection.</li>
   <li>Na koniec zapisz wyjściowy plik PDF przy użyciu metody <a href="https://reference.aspose.com/pdf/net/aspose.pdf.document/save/methods/4">Zapisz</a>.</li>
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
   <p class="col-lg-12">Aby uzyskać więcej przykładów roboczych i próbek kodu Aspose.PDF for .NET API, odwiedź naszą <a href="https://github.com/aspose-pdf/Aspose.PDF-for-.NET/tree/master/Examples">Przykłady GitHub</a>. Jeśli chcesz przeglądać, edytować, łączyć, dzielić, dodawać adnotacje, porównywać lub konwertować dokumenty PDF w locie, sprawdź nasze bezpłatne <a href="https://products.aspose.app/pdf/family" >Aplikacje do przetwarzania plików PDF.</a></p>
{{< products/product-feature-blocks
featureheading="Bezpieczne przetwarzanie plików PDF w .NET"
featuretext="Aspose.PDF dla .NET to w pełni bezpieczna biblioteka do przetwarzania plików PDF, zapewniająca funkcje bezpieczeństwa, takie jak obsługa podpisów cyfrowych, ochrona hasłem i szyfrowanie. Zapewnia to niezawodny dostęp, przetwarzanie i przesyłanie dokumentów PDF, jednocześnie zapobiegając nieautoryzowanemu dostępowi i modyfikacjom. Co więcej, nie trzeba instalować programu Adobe Acrobat, aby korzystać z tego interfejsu API przetwarzania plików .NET PDF."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="Często zadawane pytania"
>}}
   {{< products/faq-block
 faqquery="1. Jak mogę przekonwertować PDF na .NET?"
 faqanswer="Konwersja PDF w .NET jest łatwa i prosta przy użyciu Aspose.PDF dla .NET API. Wymaga tylko kilku wierszy kodu i umożliwia konwersję plików PDF do wielu formatów plików."
>}}
   {{< products/faq-block 
 faqquery="2. Jak długo trwa scalanie lub konwertowanie plików PDF?"
 faqanswer="Interfejs API .NET PDF działa szybko i przetwarza żądania scalania lub konwertowania dokumentów w mgnieniu oka."
>}}
   {{< products/faq-block
 faqquery="3. Czy przetwarzanie plików PDF przy użyciu interfejsu API .NET PDF jest bezpieczne?"
 faqanswer="Oczywiście! Możesz być spokojny o bezpieczeństwo swoich dokumentów podczas ich przetwarzania przy użyciu Aspose.PDF for .NET API. Zapewniamy prywatność Twoich danych i podejmujemy wszelkie wymagane środki, aby zapewnić Ci bezpieczną obsługę."
>}}
   {{< products/faq-block
 faqquery="4. Czy mogę przetwarzać pliki PDF w systemie Mac OS, Windows lub Linux?"
 faqanswer="Tak, interfejs API .NET do manipulowania plikami PDF działa w różnych systemach operacyjnych, platformach i środowiskach operacyjnych. Możesz go używać na wybranej przez siebie platformie. Nasza biblioteka PDF .NET nie wymaga do działania żadnej dodatkowej instalacji oprogramowania."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Narzędzia do manipulacji plikami PDF"
   >}}
   {{< products/popularapp-anchor
 anchorlink="Z pdfu do Worda"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-word/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do DOCa"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-doc/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do DOCX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-docx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do Excela"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-excel/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do XLS"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xls/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do XLSX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do PPTX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do HTML"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do TIFF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-tiff/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do PNG"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do GIF-a"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Szukasz pomocy?"
bartext="Sprawdź nasze kanały wsparcia, aby uzyskać pomoc w przypadku pytań związanych z funkcjami i działaniem interfejsu API produktu Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/pdf/net/"
 resourcetxt2="Odniesienie do interfejsu API"
 resourcelinks2="https://reference.aspose.com/pdf/" 
 resourcetxt3="Baza wiedzy"
 resourcelinks3="https://kb.aspose.com/pdf/net/"
 resourcetxt4="Bezpłatne wsparcie"
 resourcelinks4="https://forum.aspose.com/c/pdf/10"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Zasoby"
 sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogi"
 resourcealt="Blogi"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/pdf/convert-latex-to-pdf-in-python/"
 resourcelistlink2="https://blog.aspose.com/pdf/convert-pdf-to-ppt-in-python/"
 resourcelistlink3="https://blog.aspose.com/pdf/convert-pdf-to-latex-in-python/"
 resourcelisttext="Konwertuj LaTeX na PDF w Pythonie"
 resourcelisttext2="Konwertuj PDF na PPT w Pythonie"
 resourcelisttext3="Konwertuj PDF na LaTeX w Pythonie"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentacja"
 resourcealt="Dokumentacja"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/pdf/net/key-features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.PDF/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.PDF dla funkcji platformy .NET"
 resourcelisttext2="Zainstaluj Aspose.PDF dla pakietu .NET NuGet"
 resourcelisttext3="Aspose.PDF dla działu pomocy technicznej płatnej platformy .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Baza wiedzy"
 resourcealt="Próbki kodu"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/words/net/how-to-insert-hyperlink-in-word-using-csharp/"
 resourcelistlink2="https://kb.aspose.com/total/python/how-to-install-python-to-run-aspose-pdf-for-python-via-net/"
 resourcelistlink3="https://kb.aspose.com/pdf/net/how-to-add-hyperlink-in-pdf-using-csharp/"
 resourcelisttext="Jak wstawić hiperłącze w programie Word za pomocą języka C#"
resourcelisttext2="Jak zainstalować Pythona, aby uruchomić Aspose.PDF dla Pythona przez .NET"
resourcelisttext3="Jak dodać hiperłącze w PDF za pomocą C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Gotowy żeby zacząć?"
rtstext="Pobierz darmową wersję próbną"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Wyświetl wszystkie interfejsy API"
>}}

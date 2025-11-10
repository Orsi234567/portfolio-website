$docxFiles = Get-ChildItem -Path "." -Filter "*.docx"
if ($docxFiles.Count -gt 0) {
    $docxFile = $docxFiles[0].FullName
    Write-Host "Found file: $docxFile"
    
    try {
        $word = New-Object -ComObject Word.Application
        $word.Visible = $false
        $doc = $word.Documents.Open($docxFile)
        $content = $doc.Content.Text
        Write-Output $content
        $doc.Close()
        $word.Quit()
        [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
    } catch {
        Write-Host "Error: $_"
    }
} else {
    Write-Host "No .docx file found"
}



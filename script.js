function isSuspiciousURL(url) {
    try {
        const parsedURL = new URL(url.includes('://') ? url : 'http://' + url);
        const domain = parsedURL.hostname.toLowerCase();
        const pathname = parsedURL.pathname.toLowerCase();

        const shorteners = ["bit.ly", "goo.gl", "tinyurl.com", "ow.ly", "t.co", "is.gd", "buff.ly", "adf.ly"];
        const suspiciousWords = ["login", "secure", "bank", "account", "verify", "update", "webscr", "signin", "payment"];
        const suspiciousExtensions = [".exe", ".scr", ".zip", ".rar"];
        
        // Rules
        if (/^\d{1,3}(\.\d{1,3}){3}$/.test(domain)) return true; // IP address
        if (url.includes('@')) return true;                      // @ symbol
        if (url.length > 75) return true;                         // Long URL
        if (url.split('/').length > 8) return true;               // Too many slashes
        if (domain.includes('-')) return true;                    // Hyphen in domain
        if (shorteners.some(short => domain.includes(short))) return true; // Shortened URL
        if (suspiciousWords.some(word => url.includes(word))) return true; // Suspicious keywords
        if (suspiciousExtensions.some(ext => url.endsWith(ext))) return true; // Dangerous file types
        if (pathname.includes("//")) return true;                 // Double slashes
        if (domain.startsWith("www-")) return true;               // Weird www-
        if (domain.split('.').length > 4) return true;            // Very nested domains
        if (pathname.match(/(\/\w{10,})/)) return true;           // Random long folders
        
        return false;
    } catch (error) {
        console.error("Invalid URL:", error);
        return true;
    }
}

document.getElementById("checkButton").addEventListener("click", function() {
    const urlInput = document.getElementById("urlInput").value.trim();
    const result = document.getElementById("result");

    if (!urlInput) {
        result.innerHTML = "Please enter a URL!";
        result.className = "result phishing";
        return;
    }

    const isPhishing = isSuspiciousURL(urlInput);

    if (isPhishing) {
        result.innerHTML = "⚠️ Warning! This might be a Phishing Site!";
        result.className = "result phishing";
    } else {
        result.innerHTML = "✅ This site looks Safe!";
        result.className = "result safe";
    }
});

export function convertToSecureUrl(url: string | undefined | null): string {
	if (typeof url !== "string") return "";
	if (url.includes("http://5.78.46.76")) {
		return url.replace("http://5.78.46.76:3000", "https://liveoffcoupon.com");
	}
	return url;
}

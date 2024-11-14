import { DateTime } from "luxon";

export default function(eleventyConfig) {
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
	});
    
	// add custom function to extract the first image in each estate page 
	eleventyConfig.addShortcode('first_image', estate => extractFirstImage(estate));

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat('yyyy-LL-dd');
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	// Return the smallest number argument
	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	// Return the keys used in an object
	eleventyConfig.addFilter("getKeys", target => {
		return Object.keys(target);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "posts"].indexOf(tag) === -1);
	});

};

export function extractFirstImage(doc) {
	if (!doc.hasOwnProperty('templateContent')) {
	  console.warn('❌ Failed to extract image: Document has no property `templateContent`.');
	  return;
	}
  
	const content = doc.templateContent;
  
	if (content.includes('<img')) {
	  const imgTagBegin = content.indexOf('<img');
	  const imgTagEnd = content.indexOf('>', imgTagBegin);
  
	  return content.substring(imgTagBegin, imgTagEnd + 1);
	}
  
	return '';
  }

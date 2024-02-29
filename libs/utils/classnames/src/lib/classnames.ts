// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

/**
 * Generate an HTML `class` attribute string based on the input values. Different types
 * of values have the following different handling:
 * - `string` or `number`: strings are added directly as class names
 * - `object`: the key is the class name, and the value is a truthy value
 *              indicating whether we should add the key to the class string
 * - `array`: call the function recursively with the array as arguments
 */
export default function classnames(...args: ClassnamesFuncArgs[]): string {
    let classStr = '';

    args.forEach((arg) => {
        if (typeof arg === 'string' || typeof arg === 'number') {
            // Add strings and numbers directly to our class string
            classStr += `${arg} `;
        } else if (Array.isArray(arg)) {
            // Arrays have our function recursively called on their values
            classStr += classnames(...arg) + ' ';
        } else if (typeof arg === 'object' && arg !== null) {
            // Objects' keys get added as classes if their values are truthy
            const filteredClassStrings = Object.entries(arg)
                .filter((argTuple) => !!argTuple[1]) // Filter out keys with falsy values
                .map((argTuple) => argTuple[0]); // Map into array of just the keys (class strings)

            // Recursively call the function on the filtered arguments
            classStr += classnames(...filteredClassStrings) + ' ';
        }
    });

    // Filter out excess whitespace in our returned class string
    return classStr.replace(/\s+/g, ' ').trim();
}

// A list of all types with explicit handling in our function
export type ClassnamesFuncArgs =
    | string
    | undefined
    | boolean
    | null
    | number
    | Record<string, unknown>
    | Array<ClassnamesFuncArgs>;

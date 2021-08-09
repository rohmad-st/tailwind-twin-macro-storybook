import tw from 'twin.macro';

export const buttonDefaultStyle = tw`border-DEFAULT rounded-md transition-all duration-500 ease-in select-none focus:outline-none focus:shadow-DEFAULT`;

export const buttonVariantDefault = tw`border-gray-200 bg-gray-200 text-gray-700 hover:bg-gray-300`;
export const buttonVariantPrimary = tw`border-blue-500 bg-blue-500 text-white hover:bg-blue-600`;
export const buttonVariantSuccess = tw`border-green-500 bg-green-500 text-white hover:bg-green-600`;
export const buttonVariantError = tw`border-red-500 bg-red-500 text-white hover:bg-red-600`;
export const buttonVariantWarning = tw`border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-600`;
export const buttonVariantInfo = tw`border-teal-500 bg-teal-500 text-white hover:bg-teal-600`;

export const buttonSizeEkstraLarge = tw`px-8 py-5`
export const buttonSizeLarge = tw`px-5 py-3`
export const buttonSizeSmall = tw`px-4 py-2 `
export const buttonSizeEkstraSmall = tw`px-3 py-1 font-medium text-sm`

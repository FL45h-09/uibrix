'use client';
export const PrimaryButton = ({ btnType = "button", children }) => {
  return (
    <button type={btnType} className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none shadow-[var(--btn-shadow)] bg-[var(--color-primary)] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-50 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
      {children}
    </button>
  );
};
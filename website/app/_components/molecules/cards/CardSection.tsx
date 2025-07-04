"use client";

import React, { useState } from "react";
import { Copy } from "lucide-react";
import { Button } from "@uibrix/components";

export function ComponentCard({ name, description, slug }: any) {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `<${name} />`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 rounded-lg border border-gray-300 bg-white shadow-md">
      <div className="mb-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="my-4 bg-gray-50 p-3 rounded">
        <Button label="Click Me" variant="primary" />
      </div>
      <div className="flex items-center justify-between text-xs bg-gray-900 text-white p-2 rounded">
        <code>{codeSnippet}</code>
        <button onClick={copyCode} className="ml-2 hover:text-indigo-400">
          <Copy size={14} /> {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
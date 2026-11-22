---
description: Machine-readable Termeh docs for LLMs and AI coding tools using llms.txt files.
---

# AI & LLMs

Termeh provides =machine-readable documentation= for __large language models__ and __AI-powered coding tools__. Use it to help an AI assistant find the right API and write correct Termeh code.

Our docs follow the [/llms.txt](llms.txt) convention, so AI tools can read them without parsing the website.

## Resources

- [llms.txt](/llms.txt): A curated index of every documentation page with links and descriptions.
- [llms-full.txt](/llms-full.txt): The full text of the documentation concatenated into a single file for direct ingestion.

## Using llms.txt

Share [llms.txt](/llms.txt) with your AI tool when you need it to =locate= the right guide or reference page. The index lists each page with a short description, so the tool can open only the pages it needs.

## Using llms-full.txt

Use [llms-full.txt](/llms-full.txt) when the assistant needs the =complete= documentation in one context. It works well for broad questions, refactoring, or generating code across several Termeh features.

## Tips

- Start with `llms.txt` for focused questions to keep the context small.
- Use `llms-full.txt` for larger tasks where the model needs cross-page details.
- Check generated code against the API pages, as models can still make mistakes.

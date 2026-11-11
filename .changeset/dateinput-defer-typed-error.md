---
'@astryxdesign/core': patch
---

[fix] DateInput, DateTimeInput: typed dates that do not exist (such as `02/31/2026`) or that fall outside allowed ranges (`min`, `max`, `dateConstraints`) now defer their error display, live-region announcement, and `aria-invalid` state until the field is committed on `Enter` or blur. Previously, these errors were surfaced immediately mid-entry as soon as the text reached a complete date format, before the user finished typing or had a chance to correct it. This matches incomplete text, which also waits for Enter or blur.

@Geervan

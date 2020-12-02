{{/* vim: set filetype=mustache: */}}
{{/*
postgresql customisation
*/}}
{{- define "postgresql.name" -}}
{{- default "argo_test-postgresql" -}}
{{- end -}}

{{- define "postgresql.fullname" -}}
{{- default "argo_test-postgresql" -}}
{{- end -}}

#!/bin/bash
# Files are ordered in proper order with needed wait for the dependent custom resource definitions to get initialized.
# Usage: bash helm-apply.sh
cs=csvc
suffix=helm
if [ -d "${cs}-${suffix}" ]; then
helm dep up ./${cs}-${suffix}
helm upgrade --install ${cs} ./${cs}-${suffix} --namespace argo_hello_world
fi
helm dep up ./argo_test-${suffix}
helm upgrade --install argo_test ./argo_test-${suffix} --namespace argo_hello_world



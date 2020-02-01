minishift config set memory 1024
minishift start --vm-driver virtualbox
minishift addon install --defaults
minishift addon apply registry-route

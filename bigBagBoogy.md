# instant push copy paste all below in one go:

git init
git add .
git commit -m "CreateGroup"
git push -u origin main

# todo:⭐️

merge UploadProfile (now CreateGroup) with Deploy.
Deploy now works with preDeployed LSP3 profile reference.
Make async?
What is the Deploy function taking as arguments here in this app?

it's: await deployUniversalProfile(
{
controllerAddresses: [controllerKey],
lsp3Profile: {
json: selectedProfile.value.profile,
url: selectedProfile.value.url,
},

# please provide integral code without any omissions like: "// your other code here"

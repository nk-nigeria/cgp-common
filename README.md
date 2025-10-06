# cgp-common

# generate proto
- install protoc-gen-go:
```
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
```
- install buf:
```
sudo install -d -o $(id -u) -g $(id -g) /usr/local/bin && curl -sSL https://github.com/bufbuild/buf/releases/latest/download/buf-$(uname -s)-$(uname -m) -o /usr/local/bin/buf && sudo chmod +x /usr/local/bin/buf
```
- generate proto by:
```
cd proto
buf generate
```
> [!TIP]
> If you make any changes that need to be updated in the console, **copy this entire project and use it to replace the existing files in `cgp-console`**.
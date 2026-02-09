serve:
	hugo server -D
.PHONY: serve

build:
	hugo --minify
.PHONY: build

new-post:
	@read -p "Post slug (e.g. my-new-post): " slug; \
	hugo new posts/$$slug.md
.PHONY: new-post

publish:
	scp content/* stefano@prose.sh:/
.PHONY: upload

ssh:
	ssh stefano@prose.sh
.PHONY: ssh
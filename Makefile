publish:
	cd content && scp * stefano@prose.sh:/
.PHONY: upload

ssh:
	ssh stefano@prose.sh
.PHONY: ssh
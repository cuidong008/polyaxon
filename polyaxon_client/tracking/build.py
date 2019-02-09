# -*- coding: utf-8 -*-
from __future__ import absolute_import, division, print_function

from polyaxon_client import settings
from polyaxon_client.tracking import Job


class BuildJob(Job):
    REQUIRES_OUTPUTS = False

    def __init__(self,
                 project=None,
                 job_id=None,
                 job_type=None,
                 client=None,
                 track_logs=True,
                 track_code=True,
                 track_env=True,
                 outputs_store=None):
        super(BuildJob, self).__init__(
            project=project,
            job_id=job_id,
            job_type=job_type,
            client=client,
            track_logs=track_logs,
            track_code=track_code,
            track_env=track_env,
            outputs_store=outputs_store)

    def log_dockerfile(self, dockerfile):
        if settings.NO_OP:
            return

        patch_dict = {'dockerfile': dockerfile}
        self.client_backend.update_build(username=self.username,
                                         project_name=self.project_name,
                                         job_id=self.job_id,
                                         patch_dict=patch_dict,
                                         background=True)
